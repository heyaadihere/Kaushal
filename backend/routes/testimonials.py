from fastapi import APIRouter, HTTPException
from motor.motor_asyncio import AsyncIOMotorClient
import os

router = APIRouter()

MONGO_URL = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
client = AsyncIOMotorClient(MONGO_URL)
db = client.kaushal_db

@router.get("/testimonials")
async def get_testimonials():
    """Get all testimonials"""
    try:
        testimonials = await db.testimonials.find({}, {"_id": 0}).to_list(100)
        return {"success": True, "testimonials": testimonials}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
