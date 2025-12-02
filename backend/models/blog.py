from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class BlogPost(BaseModel):
    id: int
    slug: str
    title: str
    excerpt: str
    author: str
    date: str
    readTime: str
    category: str
    image: str
    content: str

class BlogPostInDB(BlogPost):
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
