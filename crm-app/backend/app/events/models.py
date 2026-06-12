# SQLAlchemy ORM model for the events table.
from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey
from datetime import datetime

from app.database import Base


class Event(Base):
    __tablename__ = "events"

    id         = Column(Integer, primary_key=True, index=True)
    title      = Column(String, nullable=False)
    contact_id = Column(Integer, ForeignKey("contacts.id"), nullable=True)
    start_at   = Column(DateTime, nullable=False)
    end_at     = Column(DateTime, nullable=True)
    location   = Column(String, nullable=True)
    notes      = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
