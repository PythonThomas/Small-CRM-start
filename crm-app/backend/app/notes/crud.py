from sqlalchemy.orm import Session
from app.notes.models import Note
from app.notes.schemas import NoteCreate, NoteUpdate


def get_notes_for_contact(db: Session, contact_id: int):
    return db.query(Note).filter(Note.contact_id == contact_id).all()


def get_note(db: Session, note_id: int):
    return db.query(Note).filter(Note.id == note_id).first()


def create_note(db: Session, data: NoteCreate):
    note = Note(**data.model_dump())
    db.add(note)
    db.commit()
    db.refresh(note)
    return note


def update_note(db: Session, note_id: int, data: NoteUpdate):
    note = get_note(db, note_id)
    if not note:
        return None
    for field, value in data.model_dump(exclude_unset=True).items():
        setattr(note, field, value)
    db.commit()
    db.refresh(note)
    return note


def delete_note(db: Session, note_id: int):
    note = get_note(db, note_id)
    if note:
        db.delete(note)
        db.commit()
    return note
