# FastAPI router for task endpoints (CRUD).
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from app.database import get_db
from app.tasks import crud, schemas

router = APIRouter()


@router.get("/", response_model=List[schemas.TaskOut])
def list_tasks(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    # TODO: return crud.get_tasks(db, skip=skip, limit=limit)
    pass


@router.get("/contact/{contact_id}", response_model=List[schemas.TaskOut])
def list_tasks_by_contact(contact_id: int, db: Session = Depends(get_db)):
    # TODO: return crud.get_tasks_by_contact(db, contact_id)
    pass


@router.get("/{task_id}", response_model=schemas.TaskOut)
def get_task(task_id: int, db: Session = Depends(get_db)):
    # TODO: fetch task, raise 404 if not found, return it
    pass


@router.post("/", response_model=schemas.TaskOut, status_code=status.HTTP_201_CREATED)
def create_task(data: schemas.TaskCreate, db: Session = Depends(get_db)):
    # TODO: return crud.create_task(db, data)
    pass


@router.patch("/{task_id}", response_model=schemas.TaskOut)
def update_task(task_id: int, data: schemas.TaskUpdate, db: Session = Depends(get_db)):
    # TODO: fetch task, raise 404 if not found, return crud.update_task(db, task_id, data)
    pass


@router.delete("/{task_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_task(task_id: int, db: Session = Depends(get_db)):
    # TODO: raise 404 if not found, call crud.delete_task(db, task_id)
    pass
