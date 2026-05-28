from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class ContactFileOut(BaseModel):
    id: int
    contact_id: int
    filename: str
    content_type: Optional[str] = None
    uploaded_at: datetime

    class Config:
        from_attributes = True
