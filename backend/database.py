import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv(
    "DATABASE_URL", 
    "postgresql://postgres:postgres@localhost:5432/julz_herbals"
)

# Replace postgresql:// with postgresql+psycopg2:// if needed
if DATABASE_URL.startswith("postgresql://"):
    SQLALCHEMY_DATABASE_URL = DATABASE_URL
else:
    SQLALCHEMY_DATABASE_URL = DATABASE_URL

engine = None
SessionLocal = None
is_db_connected = False

try:
    engine = create_engine(
        SQLALCHEMY_DATABASE_URL,
        pool_pre_ping=True,
        pool_recycle=300,
        connect_args={"connect_timeout": 3}
    )
    SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    # Test connection
    with engine.connect() as conn:
        is_db_connected = True
        print("✅ Python FastAPI connected to PostgreSQL database via SQLAlchemy ORM!")
except Exception as e:
    is_db_connected = False
    print(f"⚠️ PostgreSQL connection warning: {e}. FastAPI will run in fallback in-memory ORM mode.")

Base = declarative_base()

def get_db():
    if not is_db_connected or SessionLocal is None:
        yield None
        return
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
