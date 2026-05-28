# Endpoints for creating, reading, updating and deleting notes on a contact.
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from app.database import get_db
from app.notes import crud, schemas

router = APIRouter()


@router.get("/contact/{contact_id}", response_model=List[schemas.NoteOut])
def list_notes(contact_id: int, db: Session = Depends(get_db)):
    return crud.get_notes_for_contact(db, contact_id)


@router.post("/", response_model=schemas.NoteOut, status_code=status.HTTP_201_CREATED)
def create_note(data: schemas.NoteCreate, db: Session = Depends(get_db)):
    return crud.create_note(db, data)


@router.patch("/{note_id}", response_model=schemas.NoteOut)
def update_note(note_id: int, data: schemas.NoteUpdate, db: Session = Depends(get_db)):
    note = crud.update_note(db, note_id, data)
    if not note:
        raise HTTPException(status_code=404, detail="Note not found")
    return note


@router.delete("/{note_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_note(note_id: int, db: Session = Depends(get_db)):
    if not crud.delete_note(db, note_id):
        raise HTTPException(status_code=404, detail="Note not found")
