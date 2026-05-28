# Tracks file metadata; the actual file is stored on disk (or S3 in production).
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime

from app.database import Base


class ContactFile(Base):
    __tablename__ = "contact_files"

    id = Column(Integer, primary_key=True, index=True)
    contact_id = Column(Integer, ForeignKey("contacts.id"), nullable=False)
    filename = Column(String, nullable=False)
    # Path on the server where the file is stored
    file_path = Column(String, nullable=False)
    content_type = Column(String)
    uploaded_at = Column(DateTime, default=datetime.utcnow)

    contact = relationship("Contact", back_populates="files")
