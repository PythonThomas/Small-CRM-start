# SQLAlchemy ORM model for the tasks table.
from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey
from datetime import datetime

from app.database import Base


class Task(Base):
    __tablename__ = "tasks"

    id         = Column(Integer, primary_key=True, index=True)
    title      = Column(String, nullable=False)
    contact_id = Column(Integer, ForeignKey("contacts.id"), nullable=True)
    due_date   = Column(DateTime, nullable=True)
    priority   = Column(String, nullable=True)
    done       = Column(Boolean, default=False, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
