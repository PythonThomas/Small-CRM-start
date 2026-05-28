# SQLAlchemy ORM model for the contacts table.
from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime

from app.database import Base


class Contact(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True)
    phone = Column(String)
    company = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)

    # A contact can have many notes and files
    notes = relationship("Note", back_populates="contact", cascade="all, delete-orphan")
    files = relationship("ContactFile", back_populates="contact", cascade="all, delete-orphan")
