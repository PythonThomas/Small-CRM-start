# Pydantic schemas for request validation and response serialisation.
from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class DealBase(BaseModel):
    title:      str
    contact_id: Optional[int]   = None
    value:      Optional[float] = None
    stage:      str             = "New"
    closed_at:  Optional[datetime] = None


class DealCreate(DealBase):
    pass


class DealUpdate(BaseModel):
    title:      Optional[str]      = None
    contact_id: Optional[int]      = None
    value:      Optional[float]    = None
    stage:      Optional[str]      = None
    closed_at:  Optional[datetime] = None


class DealOut(DealBase):
    id:         int
    created_at: datetime

    class Config:
        from_attributes = True
