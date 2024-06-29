# models.py
from sqlalchemy import Column, Integer, String, Text, DateTime
from datetime import datetime
from .database import Base

class PostModel(Base):
    __tablename__ = "posts"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    content = Column(Text)
    image_url = Column(String)
    category = Column(String)
    timestamp = Column(DateTime, default=datetime.utcnow)
    author = Column(String)
    url = Column(String)
