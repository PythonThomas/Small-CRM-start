# FastAPI router for deal endpoints (CRUD).
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from app.database import get_db
from app.deals import crud, schemas

router = APIRouter()


@router.get("/", response_model=List[schemas.DealOut])
def list_deals(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    # TODO: return crud.get_deals(db, skip=skip, limit=limit)
    pass


@router.get("/contact/{contact_id}", response_model=List[schemas.DealOut])
def list_deals_by_contact(contact_id: int, db: Session = Depends(get_db)):
    # TODO: return crud.get_deals_by_contact(db, contact_id)
    pass


@router.get("/{deal_id}", response_model=schemas.DealOut)
def get_deal(deal_id: int, db: Session = Depends(get_db)):
    # TODO: fetch deal, raise 404 if not found, return it
    pass


@router.post("/", response_model=schemas.DealOut, status_code=status.HTTP_201_CREATED)
def create_deal(data: schemas.DealCreate, db: Session = Depends(get_db)):
    # TODO: return crud.create_deal(db, data)
    pass


@router.patch("/{deal_id}", response_model=schemas.DealOut)
def update_deal(deal_id: int, data: schemas.DealUpdate, db: Session = Depends(get_db)):
    # TODO: fetch deal, raise 404 if not found, return crud.update_deal(db, deal_id, data)
    pass


@router.delete("/{deal_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_deal(deal_id: int, db: Session = Depends(get_db)):
    # TODO: raise 404 if not found, call crud.delete_deal(db, deal_id)
    pass
