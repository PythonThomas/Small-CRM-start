from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class NoteBase(BaseModel):
    contact_id: int
    body: str


class NoteCreate(NoteBase):
    pass


class NoteUpdate(BaseModel):
    body: Optional[str] = None


class NoteOut(NoteBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True
