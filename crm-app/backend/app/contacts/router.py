# FastAPI router for contact endpoints (CRUD).
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from app.database import get_db
from app.contacts import crud, schemas

router = APIRouter()


@router.get("/", response_model=List[schemas.ContactOut])
def list_contacts(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.get_contacts(db, skip=skip, limit=limit)


@router.get("/{contact_id}", response_model=schemas.ContactOut)
def get_contact(contact_id: int, db: Session = Depends(get_db)):
    contact = crud.get_contact(db, contact_id)
    if not contact:
        raise HTTPException(status_code=404, detail="Contact not found")
    return contact


@router.post("/", response_model=schemas.ContactOut, status_code=status.HTTP_201_CREATED)
def create_contact(data: schemas.ContactCreate, db: Session = Depends(get_db)):
    return crud.create_contact(db, data)


@router.patch("/{contact_id}", response_model=schemas.ContactOut)
def update_contact(contact_id: int, data: schemas.ContactUpdate, db: Session = Depends(get_db)):
    contact = crud.update_contact(db, contact_id, data)
    if not contact:
        raise HTTPException(status_code=404, detail="Contact not found")
    return contact


@router.delete("/{contact_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_contact(contact_id: int, db: Session = Depends(get_db)):
    if not crud.delete_contact(db, contact_id):
        raise HTTPException(status_code=404, detail="Contact not found")
