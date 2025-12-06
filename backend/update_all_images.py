import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

MONGO_URL = os.environ['MONGO_URL']

async def update_all_images():
    client = AsyncIOMotorClient(MONGO_URL)
    db = client.kaushal_db
    
    try:
        print("Updating all images with high-resolution, domain-relevant images...")
        
        # Update Team Members with professional portraits
        team_images = [
            "https://images.unsplash.com/photo-1633353237701-1bf9b7e866ff?w=800&h=800&fit=crop&crop=faces&q=90",
            "https://images.unsplash.com/photo-1740153204804-200310378f2f?w=800&h=800&fit=crop&crop=faces&q=90",
            "https://images.pexels.com/photos/5217854/pexels-photo-5217854.jpeg?w=800&h=800&fit=crop&crop=faces&auto=compress&cs=tinysrgb",
            "https://images.pexels.com/photos/4098274/pexels-photo-4098274.jpeg?w=800&h=800&fit=crop&crop=faces&auto=compress&cs=tinysrgb"
        ]
        
        team_members = await db.team.find({}).to_list(10)
        for idx, member in enumerate(team_members):
            await db.team.update_one(
                {"id": member["id"]},
                {"$set": {"image": team_images[idx]}}
            )
        print(f"✅ Updated {len(team_members)} team member images")
        
        # Update Testimonials with happy couple images
        testimonial_images = [
            "https://images.unsplash.com/photo-1640953141348-86daef046d61?w=800&h=800&fit=crop&crop=faces&q=90",
            "https://images.unsplash.com/photo-1554384032-56ff486b6cd4?w=800&h=800&fit=crop&crop=faces&q=90",
            "https://images.unsplash.com/photo-1640953146098-944d790b5cc4?w=800&h=800&fit=crop&crop=faces&q=90",
            "https://images.pexels.com/photos/2917382/pexels-photo-2917382.jpeg?w=800&h=800&fit=crop&crop=faces&auto=compress&cs=tinysrgb"
        ]
        
        testimonials = await db.testimonials.find({}).to_list(10)
        for idx, testimonial in enumerate(testimonials):
            await db.testimonials.update_one(
                {"id": testimonial["id"]},
                {"$set": {"image": testimonial_images[idx]}}
            )
        print(f"✅ Updated {len(testimonials)} testimonial images")
        
        # Update Blog Images with topic-specific images
        blog_images = {
            1: "https://images.pexels.com/photos/7731330/pexels-photo-7731330.jpeg?w=1600&h=900&fit=crop&auto=compress&cs=tinysrgb&q=90",  # Partnership Accord
            2: "https://images.unsplash.com/photo-1758691031749-607d43c14f63?w=1600&h=900&fit=crop&q=90",  # Money Talks
            3: "https://images.unsplash.com/photo-1621112904887-419379ce6824?w=1600&h=900&fit=crop&q=90",  # Family Integration
            4: "https://images.unsplash.com/photo-1716429086050-b753513702ec?w=1600&h=900&fit=crop&q=90",  # Communication Styles
            5: "https://images.unsplash.com/photo-1739289696462-38757a5dd81f?w=1600&h=900&fit=crop&q=90",  # Career Aspirations
            6: "https://images.unsplash.com/photo-1758524945869-24a53c8cbc1e?w=1600&h=900&fit=crop&q=90",  # Conflict Resolution
            7: "https://images.unsplash.com/photo-1604368141277-d3404d1982aa?w=1600&h=900&fit=crop&q=90",  # Intimacy Boundaries
            8: "https://images.unsplash.com/photo-1705746401439-cefe49abb9cd?w=1600&h=900&fit=crop&q=90",  # Life Transitions
            9: "https://images.unsplash.com/photo-1593655364090-9ff8334de627?w=1600&h=900&fit=crop&q=90",  # Digital Age
            10: "https://images.unsplash.com/photo-1758524944186-cf2016869381?w=1600&h=900&fit=crop&q=90",  # Marriage Skills
            11: "https://images.unsplash.com/photo-1758524943150-37dba45aff1c?w=1600&h=900&fit=crop&q=90",  # AI Relationships
            12: "https://images.pexels.com/photos/8560014/pexels-photo-8560014.jpeg?w=1600&h=900&fit=crop&auto=compress&cs=tinysrgb&q=90"  # Divorce Prevention
        }
        
        for blog_id, image_url in blog_images.items():
            await db.blogs.update_one(
                {"id": blog_id},
                {"$set": {"image": image_url}}
            )
        print(f"✅ Updated {len(blog_images)} blog featured images")
        
        # Update Services with relevant service images
        service_images = {
            "1": "https://images.pexels.com/photos/6963071/pexels-photo-6963071.jpeg?w=1600&h=900&fit=crop&auto=compress&cs=tinysrgb&q=90",  # Foundational Agreements
            "2": "https://images.unsplash.com/photo-1758524944418-c8bf613c4de7?w=1600&h=900&fit=crop&q=90",  # Constructive Dialogue
            "3": "https://images.unsplash.com/photo-1747221722650-3dc08fe87c38?w=1600&h=900&fit=crop&q=90"  # Family Integration
        }
        
        # Services don't have image field in current structure, but we can add if needed
        # For now, they use videos which are already good
        print(f"✅ Service videos already configured")
        
        print("\n📊 Image Update Summary:")
        print(f"  - Team Members: {len(team_members)} images updated")
        print(f"  - Testimonials: {len(testimonials)} images updated")
        print(f"  - Blogs: {len(blog_images)} images updated")
        print(f"\n✅ All images updated with high-resolution, domain-relevant photos!")
        
    except Exception as e:
        print(f"❌ Error: {e}")
    finally:
        client.close()

if __name__ == "__main__":
    asyncio.run(update_all_images())
