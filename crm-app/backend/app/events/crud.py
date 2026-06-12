# CRUD helpers for events — keep route handlers thin by handling DB logic here.
from sqlalchemy.orm import Session
from app.events.models import Event
from app.events.schemas import EventCreate, EventUpdate


def get_event(db: Session, event_id: int):
    # TODO: return one Event row by id, or None
    pass


def get_events(db: Session, skip: int = 0, limit: int = 100):
    # TODO: return a paginated list of Event rows
    pass


def get_events_by_contact(db: Session, contact_id: int):
    # TODO: return all events linked to a contact
    pass


def create_event(db: Session, data: EventCreate):
    # TODO: insert a new Event row and return it
    pass


def update_event(db: Session, event_id: int, data: EventUpdate):
    # TODO: update only the fields sent by the caller and return the event
    pass


def delete_event(db: Session, event_id: int):
    # TODO: delete the event and return the deleted object (or None)
    pass
