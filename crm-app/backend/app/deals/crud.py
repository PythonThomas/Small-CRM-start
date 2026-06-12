# CRUD helpers for deals — keep route handlers thin by handling DB logic here.
from sqlalchemy.orm import Session
from app.deals.models import Deal
from app.deals.schemas import DealCreate, DealUpdate


def get_deal(db: Session, deal_id: int):
    # TODO: return one Deal row by id, or None
    pass


def get_deals(db: Session, skip: int = 0, limit: int = 100):
    # TODO: return a paginated list of Deal rows
    pass


def get_deals_by_contact(db: Session, contact_id: int):
    # TODO: return all deals linked to a contact
    pass


def create_deal(db: Session, data: DealCreate):
    # TODO: insert a new Deal row and return it
    pass


def update_deal(db: Session, deal_id: int, data: DealUpdate):
    # TODO: update only the fields sent by the caller and return the deal
    pass


def delete_deal(db: Session, deal_id: int):
    # TODO: delete the deal and return the deleted object (or None)
    pass
