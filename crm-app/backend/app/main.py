# Entry point for the FastAPI application.
# Serves the frontend directly and registers all API routers.
from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pathlib import Path

from app.database import engine, Base
from app.contacts.router import router as contacts_router
from app.notes.router import router as notes_router
from app.files.router import router as files_router

# Create all tables on startup (use Alembic for production migrations)
Base.metadata.create_all(bind=engine)

app = FastAPI(title="CRM API", version="1.0.0")

# Resolve the frontend directory relative to this file:
#   main.py  →  backend/app/main.py
#   parent   →  backend/app/
#   parent   →  backend/
#   parent   →  crm-app/
#   / frontend  →  crm-app/frontend/
FRONTEND_DIR = Path(__file__).resolve().parent.parent.parent / "frontend"

# Serve JS, CSS and other assets under /src
app.mount("/src", StaticFiles(directory=FRONTEND_DIR / "src"), name="src")

# API routers
app.include_router(contacts_router, prefix="/contacts", tags=["contacts"])
app.include_router(notes_router,    prefix="/notes",    tags=["notes"])
app.include_router(files_router,    prefix="/files",    tags=["files"])


# ── HTML page routes ──────────────────────────────────────────────────────────

@app.get("/")
def serve_dashboard():
    return FileResponse(FRONTEND_DIR / "index.html")

@app.get("/contacts.html")
def serve_contacts():
    return FileResponse(FRONTEND_DIR / "contacts.html")

@app.get("/deals.html")
def serve_deals():
    return FileResponse(FRONTEND_DIR / "deals.html")

@app.get("/tasks.html")
def serve_tasks():
    return FileResponse(FRONTEND_DIR / "tasks.html")

@app.get("/calendar.html")
def serve_calendar():
    return FileResponse(FRONTEND_DIR / "calendar.html")
