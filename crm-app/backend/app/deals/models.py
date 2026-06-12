# SQLAlchemy ORM model for the deals table.
from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from datetime import datetime

from app.database import Base


class Deal(Base):
    __tablename__ = "deals"

    id         = Column(Integer, primary_key=True, index=True)
    title      = Column(String, nullable=False)
    contact_id = Column(Integer, ForeignKey("contacts.id"), nullable=True)
    value      = Column(Float, nullable=True)
    stage      = Column(String, nullable=False, default="New")
    closed_at  = Column(DateTime, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
