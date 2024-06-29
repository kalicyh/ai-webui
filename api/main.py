# main.py
from typing import List
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import datetime
from sqlalchemy.orm import Session
from api.db.database import engine, SessionLocal, Base, get_db  # 导入SessionLocal变量
from api.db.models import PostModel  # 导入数据库模型

app = FastAPI()

# 配置 CORS
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic 模型
class Post(BaseModel):
    id: int
    title: str
    content: str
    image_url: str
    category: str
    timestamp: datetime
    author: str
    url: str

    class Config:
        orm_mode = True

Base.metadata.create_all(bind=engine)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/api/getpost", response_model=List[Post])
def get_posts(db: Session = Depends(get_db)):
    posts = db.query(PostModel).order_by(PostModel.timestamp).all()
    return posts

# 示例数据插入（仅在启动时运行一次）
def insert_sample_data():
    db = SessionLocal()
    if db.query(PostModel).first() is None:  # 检查数据库中是否已经有数据
        sample_posts = [
            PostModel(
                title="Post 1",
                content="This is the content of post 1",
                image_url="https://www.loliapi.com/acg/",
                category="分类1",
                author="Author 1",
                url="https://example.com/post1"
            ),
            PostModel(
                title="Post 2",
                content="This is the content of post 2",
                image_url="https://www.loliapi.com/bg/",
                category="分类2",
                author="Author 2",
                url="https://example.com/post2"
            ),
        ]
        db.add_all(sample_posts)
        db.commit()
    db.close()

# 启动时插入示例数据
@app.on_event("startup")
def on_startup():
    insert_sample_data()
