# Full blog data extracted from all 10 PDFs
# This will be imported by seed_blogs.py

from datetime import datetime, timezone

def get_all_blogs():
    return [
        # Blog 1 - Already in seed_blogs.py with full content
        
        # Blog 2
        {
            "id": 2,
            "slug": "money-talks",
            "title": "Money Talks: 5 Financial Conversations Every Couple Should Have Before Tying the Knot",
            "excerpt": "Most couples will happily spend hours discussing the wedding menu... but freeze the moment the word money comes up. Learn the 5 essential financial conversations every couple needs.",
            "author": "Kaushal Team",
            "date": "November 28, 2024",
            "readTime": "15 min read",
            "category": "Finance",
            "image": "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
            "content": "PLACEHOLDER_CONTENT_2",
            "created_at": datetime.now(timezone.utc),
            "updated_at": datetime.now(timezone.utc)
        }
    ]
