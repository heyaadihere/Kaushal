from fastapi import APIRouter, HTTPException
from typing import List
import os
from motor.motor_asyncio import AsyncIOMotorClient

router = APIRouter()

# MongoDB connection
MONGO_URL = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
client = AsyncIOMotorClient(MONGO_URL)
db = client.kaushal_db

@router.get("/blogs")
async def get_all_blogs():
    """Get all blog posts"""
    try:
        blogs = await db.blogs.find({}, {"_id": 0}).sort("id", -1).to_list(100)
        return {"success": True, "blogs": blogs}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/blogs/{slug}")
async def get_blog_by_slug(slug: str):
    """Get a single blog post by slug"""
    try:
        blog = await db.blogs.find_one({"slug": slug}, {"_id": 0})
        if not blog:
            raise HTTPException(status_code=404, detail="Blog post not found")
        return {"success": True, "blog": blog}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/blogs/category/{category}")
async def get_blogs_by_category(category: str):
    """Get blog posts by category"""
    try:
        if category.lower() == "all":
            blogs = await db.blogs.find({}, {"_id": 0}).sort("id", -1).to_list(100)
        else:
            blogs = await db.blogs.find({"category": category}, {"_id": 0}).sort("id", -1).to_list(100)
        return {"success": True, "blogs": blogs}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/blogs/related/{slug}")
async def get_related_blogs(slug: str, limit: int = 3):
    """Get related blog posts (excluding current one)"""
    try:
        blogs = await db.blogs.find({"slug": {"$ne": slug}}, {"_id": 0}).limit(limit).to_list(limit)
        return {"success": True, "blogs": blogs}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
