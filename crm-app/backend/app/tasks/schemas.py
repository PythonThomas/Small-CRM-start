# Pydantic schemas for request validation and response serialisation.
from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class TaskBase(BaseModel):
    title:      str
    contact_id: Optional[int]      = None
    due_date:   Optional[datetime] = None
    priority:   Optional[str]      = None
    done:       bool               = False


class TaskCreate(TaskBase):
    pass


class TaskUpdate(BaseModel):
    title:      Optional[str]      = None
    contact_id: Optional[int]      = None
    due_date:   Optional[datetime] = None
    priority:   Optional[str]      = None
    done:       Optional[bool]     = None


class TaskOut(TaskBase):
    id:         int
    created_at: datetime

    class Config:
        from_attributes = True
