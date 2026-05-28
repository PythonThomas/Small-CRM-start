# File upload/download endpoints.
# Files are saved to the local "uploads/" directory; swap for S3 in production.
import os
import shutil
from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, status
from sqlalchemy.orm import Session
from typing import List

from app.database import get_db
from app.files import crud, schemas

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

router = APIRouter()


@router.get("/contact/{contact_id}", response_model=List[schemas.ContactFileOut])
def list_files(contact_id: int, db: Session = Depends(get_db)):
    return crud.get_files_for_contact(db, contact_id)


@router.post("/contact/{contact_id}", response_model=schemas.ContactFileOut, status_code=status.HTTP_201_CREATED)
def upload_file(contact_id: int, file: UploadFile = File(...), db: Session = Depends(get_db)):
    dest = os.path.join(UPLOAD_DIR, f"{contact_id}_{file.filename}")
    with open(dest, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    return crud.create_file_record(db, contact_id, file.filename, dest, file.content_type)


@router.delete("/{file_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_file(file_id: int, db: Session = Depends(get_db)):
    record = crud.delete_file_record(db, file_id)
    if not record:
        raise HTTPException(status_code=404, detail="File not found")
    # Remove from disk if it exists
    if os.path.exists(record.file_path):
        os.remove(record.file_path)
