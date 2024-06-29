# config.py
import os
from dotenv import load_dotenv

load_dotenv()  # 加载 .env 文件中的环境变量

DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./test.db")
