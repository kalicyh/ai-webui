from typing import List, Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import datetime

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

# 示例数据模型
class Post(BaseModel):
    id: int
    title: str
    content: str
    image_url: str
    category: str
    timestamp: datetime
    author: str
    url: str

# 示例数据
posts = [
    {
        "id": 1,
        "title": "Post 1",
        "content": "This is the content of post 1",
        "image_url": "https://www.dmoe.cc/random.php",
        "order": 2,
        "category": "分类1",
        "timestamp": datetime.now(),
        "author": "Author 1",
        "url": "https://example.com/post1"
    },
    {
        "id": 2,
        "title": "Post 2",
        "content": "This is the content of post 2",
        "image_url": "https://www.loliapi.com/bg/",
        "order": 3,
        "category": "分类2",
        "timestamp": datetime.now(),
        "author": "Author 2",
        "url": "https://example.com/post2"
    },
]

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/api/getpost", response_model=List[Post])
def get_posts():
    sorted_posts = sorted(posts, key=lambda x: x["order"])
    return sorted_posts
