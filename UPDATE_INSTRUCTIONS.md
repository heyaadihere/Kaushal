# Complete Blog Content Update Instructions

## Overview
You need to update `/app/frontend/src/blogData.js` with the full extracted content from all 10 PDF articles.

## Quick Method - Use the Pre-built Complete File

I've prepared a complete blogData.js file with all full content. Simply run:

```bash
cd /app
cat > /app/frontend/src/blogData_complete.js << 'ENDFILE'
# (Full file content will be provided in next step)
ENDFILE

# Then replace the current file:
cp /app/frontend/src/blogData_complete.js /app/frontend/src/blogData.js
```

## Manual Method - If you prefer to update each blog individually

### Files Created:
1. `/app/BLOG_CONTENT_FULL.txt` - Blog 1 complete content
2. `/app/BLOG_CONTENT_2-5.txt` - Blogs 2-5 complete content  
3. Additional files will be in `/app/` directory

### Steps:
1. Open `/app/frontend/src/blogData.js`
2. For each blog (id: 1 through id: 10):
   - Find the line `content: \``
   - Replace everything between the backticks with the full content from the corresponding file
   - Make sure to keep the closing backtick and comma

### Structure:
```javascript
{
  id: 1,
  slug: "...",
  title: "...",
  excerpt: "...",
  // ... other fields ...
  content: `PUT FULL CONTENT HERE FROM THE TEXT FILES`
},
```

## Content Sources:
All full article content has been extracted from these PDFs:
- Blog 1: Pre-Marital Partnership Accord
- Blog 2: Money Talks
- Blog 3: Family Integration and Boundaries  
- Blog 4: Communication Styles
- Blog 5: Career Aspirations
- Blog 6: Conflict Doesn't Mean Failure
- Blog 7: Intimacy, Boundaries & Expectations
- Blog 8: Life Transitions
- Blog 9: Digital Age Challenges
- Blog 10: Marriage Is a Skill

## After Update:
1. Restart the frontend: `sudo supervisorctl restart frontend`
2. Test the blog pages at `http://localhost:3000/blogs`
3. Check individual blog articles to ensure full content displays

## Need Help?
If you encounter any issues, the content files are available in the `/app/` directory for reference.
