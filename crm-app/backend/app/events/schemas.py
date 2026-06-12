# Pydantic schemas for request validation and response serialisation.
from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class EventBase(BaseModel):
    title:      str
    contact_id: Optional[int]      = None
    start_at:   datetime
    end_at:     Optional[datetime] = None
    location:   Optional[str]      = None
    notes:      Optional[str]      = None


class EventCreate(EventBase):
    pass


class EventUpdate(BaseModel):
    title:      Optional[str]      = None
    contact_id: Optional[int]      = None
    start_at:   Optional[datetime] = None
    end_at:     Optional[datetime] = None
    location:   Optional[str]      = None
    notes:      Optional[str]      = None


class EventOut(EventBase):
    id:         int
    created_at: datetime

    class Config:
        from_attributes = True
