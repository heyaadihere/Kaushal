from fastapi import APIRouter, HTTPException
from motor.motor_asyncio import AsyncIOMotorClient
import os

router = APIRouter()

MONGO_URL = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
client = AsyncIOMotorClient(MONGO_URL)
db = client.kaushal_db

@router.get("/team")
async def get_team_members():
    """Get all team members"""
    try:
        team = await db.team.find({}, {"_id": 0}).to_list(100)
        return {"success": True, "team": team}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
