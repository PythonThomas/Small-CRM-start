# CRUD helpers — keep route handlers thin by handling DB logic here.
from sqlalchemy.orm import Session
from app.contacts.models import Contact
from app.contacts.schemas import ContactCreate, ContactUpdate


def get_contact(db: Session, contact_id: int):
    return db.query(Contact).filter(Contact.id == contact_id).first()


def get_contacts(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Contact).offset(skip).limit(limit).all()


def create_contact(db: Session, data: ContactCreate):
    contact = Contact(**data.model_dump())
    db.add(contact)
    db.commit()
    db.refresh(contact)
    return contact


def update_contact(db: Session, contact_id: int, data: ContactUpdate):
    contact = get_contact(db, contact_id)
    if not contact:
        return None
    for field, value in data.model_dump(exclude_unset=True).items():
        setattr(contact, field, value)
    db.commit()
    db.refresh(contact)
    return contact


def delete_contact(db: Session, contact_id: int):
    contact = get_contact(db, contact_id)
    if contact:
        db.delete(contact)
        db.commit()
    return contact
