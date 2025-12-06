from fastapi import APIRouter, HTTPException
from motor.motor_asyncio import AsyncIOMotorClient
import os

router = APIRouter()

MONGO_URL = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
client = AsyncIOMotorClient(MONGO_URL)
db = client.kaushal_db

@router.get("/packages")
async def get_all_packages():
    """Get all packages"""
    try:
        packages = await db.packages.find({}, {"_id": 0}).to_list(100)
        return {"success": True, "packages": packages}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/packages/{package_id}")
async def get_package_by_id(package_id: str):
    """Get a single package by ID"""
    try:
        package = await db.packages.find_one({"id": package_id}, {"_id": 0})
        if not package:
            raise HTTPException(status_code=404, detail="Package not found")
        return {"success": True, "package": package}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
