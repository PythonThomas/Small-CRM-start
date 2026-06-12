# FastAPI router for event endpoints (CRUD).
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from app.database import get_db
from app.events import crud, schemas

router = APIRouter()


@router.get("/", response_model=List[schemas.EventOut])
def list_events(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    # TODO: return crud.get_events(db, skip=skip, limit=limit)
    pass


@router.get("/contact/{contact_id}", response_model=List[schemas.EventOut])
def list_events_by_contact(contact_id: int, db: Session = Depends(get_db)):
    # TODO: return crud.get_events_by_contact(db, contact_id)
    pass


@router.get("/{event_id}", response_model=schemas.EventOut)
def get_event(event_id: int, db: Session = Depends(get_db)):
    # TODO: fetch event, raise 404 if not found, return it
    pass


@router.post("/", response_model=schemas.EventOut, status_code=status.HTTP_201_CREATED)
def create_event(data: schemas.EventCreate, db: Session = Depends(get_db)):
    # TODO: return crud.create_event(db, data)
    pass


@router.patch("/{event_id}", response_model=schemas.EventOut)
def update_event(event_id: int, data: schemas.EventUpdate, db: Session = Depends(get_db)):
    # TODO: fetch event, raise 404 if not found, return crud.update_event(db, event_id, data)
    pass


@router.delete("/{event_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_event(event_id: int, db: Session = Depends(get_db)):
    # TODO: raise 404 if not found, call crud.delete_event(db, event_id)
    pass
