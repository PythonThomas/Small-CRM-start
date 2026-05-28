# Entry point for the FastAPI application.
# Registers all routers and configures CORS for the React frontend.
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import engine, Base
from app.contacts.router import router as contacts_router
from app.notes.router import router as notes_router
from app.files.router import router as files_router

# Create all tables on startup (use Alembic for production migrations)
Base.metadata.create_all(bind=engine)

app = FastAPI(title="CRM API", version="1.0.0")

# Allow requests from the Vite dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contacts_router, prefix="/contacts", tags=["contacts"])
app.include_router(notes_router, prefix="/notes", tags=["notes"])
app.include_router(files_router, prefix="/files", tags=["files"])


@app.get("/")
def root():
    return {"status": "ok"}
