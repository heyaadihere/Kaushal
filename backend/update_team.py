import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv

load_dotenv()

async def update_team():
    # Connect to MongoDB
    client = AsyncIOMotorClient(os.getenv('MONGO_URL'))
    db = client.kaushal_db
    
    # Clear existing team
    await db.team.delete_many({})
    
    # Insert Anisha Gupta as Founder
    team_member = {
        "id": 1,
        "name": "Anisha Gupta",
        "role": "Founder",
        "description": "Visionary behind Kaushal, dedicated to empowering couples through structured pre-marital conversations and partnership frameworks.",
        "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop&crop=faces&q=90"
    }
    
    await db.team.insert_one(team_member)
    
    print("✓ Team updated successfully!")
    print(f"✓ Added: {team_member['name']} - {team_member['role']}")
    
    client.close()

if __name__ == "__main__":
    asyncio.run(update_team())
