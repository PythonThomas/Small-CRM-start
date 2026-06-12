# CRUD helpers for tasks — keep route handlers thin by handling DB logic here.
from sqlalchemy.orm import Session
from app.tasks.models import Task
from app.tasks.schemas import TaskCreate, TaskUpdate


def get_task(db: Session, task_id: int):
    # TODO: return one Task row by id, or None
    pass


def get_tasks(db: Session, skip: int = 0, limit: int = 100):
    # TODO: return a paginated list of Task rows
    pass


def get_tasks_by_contact(db: Session, contact_id: int):
    # TODO: return all tasks linked to a contact
    pass


def create_task(db: Session, data: TaskCreate):
    # TODO: insert a new Task row and return it
    pass


def update_task(db: Session, task_id: int, data: TaskUpdate):
    # TODO: update only the fields sent by the caller and return the task
    pass


def delete_task(db: Session, task_id: int):
    # TODO: delete the task and return the deleted object (or None)
    pass
