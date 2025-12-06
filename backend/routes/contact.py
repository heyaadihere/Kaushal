from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime, timezone
import os

router = APIRouter()

MONGO_URL = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
client = AsyncIOMotorClient(MONGO_URL)
db = client.kaushal_db

class ContactSubmission(BaseModel):
    name: str
    email: EmailStr
    phone: str
    message: str

@router.post("/contact")
async def submit_contact_form(submission: ContactSubmission):
    """Handle contact form submissions"""
    try:
        contact_data = submission.dict()
        contact_data['submitted_at'] = datetime.now(timezone.utc).isoformat()
        contact_data['status'] = 'new'
        
        await db.contacts.insert_one(contact_data)
        
        return {
            "success": True,
            "message": "Thank you for contacting us! We'll get back to you soon."
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/contacts")
async def get_all_contacts():
    """Get all contact submissions (admin use)"""
    try:
        contacts = await db.contacts.find({}, {"_id": 0}).sort("submitted_at", -1).to_list(1000)
        return {"success": True, "contacts": contacts}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
