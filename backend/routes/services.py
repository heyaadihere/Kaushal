from fastapi import APIRouter, HTTPException
from motor.motor_asyncio import AsyncIOMotorClient
import os

router = APIRouter()

MONGO_URL = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
client = AsyncIOMotorClient(MONGO_URL)
db = client.kaushal_db

@router.get("/services")
async def get_all_services():
    """Get all services"""
    try:
        services = await db.services.find({}, {"_id": 0}).to_list(100)
        return {"success": True, "services": services}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/services/{service_id}")
async def get_service_by_id(service_id: str):
    """Get a single service by ID"""
    try:
        service = await db.services.find_one({"id": service_id}, {"_id": 0})
        if not service:
            raise HTTPException(status_code=404, detail="Service not found")
        return {"success": True, "service": service}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
