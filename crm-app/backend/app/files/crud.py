from sqlalchemy.orm import Session
from app.files.models import ContactFile


def get_files_for_contact(db: Session, contact_id: int):
    return db.query(ContactFile).filter(ContactFile.contact_id == contact_id).all()


def create_file_record(db: Session, contact_id: int, filename: str, file_path: str, content_type: str):
    record = ContactFile(
        contact_id=contact_id,
        filename=filename,
        file_path=file_path,
        content_type=content_type,
    )
    db.add(record)
    db.commit()
    db.refresh(record)
    return record


def delete_file_record(db: Session, file_id: int):
    record = db.query(ContactFile).filter(ContactFile.id == file_id).first()
    if record:
        db.delete(record)
        db.commit()
    return record
