import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

MONGO_URL = os.environ['MONGO_URL']

# 2 new blogs with full content
new_blogs = [
    {
        "id": 11,
        "slug": "ai-relationships-google-chatgpt-advice",
        "title": "AI & Relationships: Can You Trust Google/ChatGPT for Couple Advice?",
        "excerpt": "It's 1:30 am. You're lying on opposite sides of the bed. Someone quietly types: 'Is my partner emotionally unavailable?' or 'ChatGPT, tell me what to do about my marriage.' Can you trust AI for couple advice?",
        "author": "Kaushal Team",
        "date": "December 3, 2024",
        "readTime": "16 min read",
        "category": "Modern Relationships",
        "image": "https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
        "content": """AI & Relationships: Can You Trust Google/ChatGPT for Couple Advice?

At some point after a tough fight, almost every couple I meet at The Kaushal has done the same thing.

You know the scene.

It's 1:30 am. You're lying on opposite sides of the bed.
Someone quietly types into the phone:

"Is my partner emotionally unavailable?"
"Should I break up or stay?"
"How to know if this relationship is toxic?"

Or now, more often:

"ChatGPT, tell me what to do about my marriage."

And suddenly you're down a rabbit hole of Instagram posts, Reddit threads, pop-psych quizzes, and AI-generated essays about attachment styles, narcissism, "bare minimum Mondays", and 20 ways to know if they're "the one".

Some of this content is insightful. Some of it is... chaos. And almost none of it actually knows you.

So let's ask the real question:

In the age of Google, Instagram therapists, and ChatGPT can you actually trust AI for couple advice?

As someone who works with couples and also lives in this tech-saturated world, I don't think the answer is a simple yes or no.

It's more like:

"Yes, for some things - as long as you're clear about what it can't do."

Let's unpack that.

The late-night AI therapist: what's really happening?

Tools like Google and ChatGPT feel incredibly comforting in conflict because they:

• Reply instantly
• Never get tired or impatient
• Sound confident and structured
• Don't judge you (or your partner) to your face

When you're emotionally flooded, that can feel safer than talking to a human - including your partner.

But there's a catch.

Even the most "smart" AI:

• Doesn't know your full history
• Only sees the side of the story you choose to tell
• Can't watch your body language, tone, or your partner's reactions
• Can't see patterns across time, only across words

So when you ask, "Is my partner the problem or am I?"

The AI is essentially going:

"Based on the words you just gave me, and patterns from millions of other words I've seen, here are some possibilities..."

That's useful information. It's incomplete as a diagnosis. And it's definitely not a magic answer to "Should we stay together or not?"

What AI can genuinely help with (and I actually recommend)

Let's start with the good news. AI and Google can be helpful for couples - if you use them like tools, not oracles.

Here are some ways I've seen them support people well:

1. Finding language for what you feel

Sometimes you just know:

• "Something feels off."
• "I keep shutting down."
• "I get angry way too fast."

Googling or asking AI about:

• Attachment styles
• Conflict patterns
• Love languages
• Emotional flooding, stonewalling, people-pleasing

...can give you vocabulary. A name for the thing. That alone can be grounding.

You might realise: "Oh, this is not just me being crazy - there's a pattern here lots of people experience."

2. Getting conversation prompts and questions

You can absolutely use AI to generate:

• Questions to ask before marriage or moving in
• Prompts for weekly check-ins
• Lists of topics to cover in a Partnership Accord
• Ways to start a difficult conversation more gently

For many couples, the hardest part is: "I don't know how to bring this up." A script or sentence starter can lower the temperature and help you begin.

3. Learning basic skills and frameworks

AI can explain:

• Communication tools (active listening, "I" statements, time-outs)
• Conflict frameworks (how to de-escalate, how to repair)
• Financial basics (budgeting as a couple, joint vs separate accounts pros & cons)

Think of this as psychoeducation - learning concepts and tools you can then try together, preferably in your own words.

4. Normalising that you're not alone

Sometimes reading or hearing: "Lots of couples struggle with this." is a relief.

It reduces the shame and makes it easier to say to your partner:

"Hey, this seems to be a common thing. Maybe we could talk about it too?"

Used like this, AI and search engines can be like a library or a brainstorming buddy. The trouble starts when they become your primary decision-maker.

Where AI falls short (and can quietly harm)

There are some very real limitations that you need to keep in mind - especially for relationship work.

1. It only hears one side

Even if you try to be "fair", you're still:

• Choosing what details to share
• Using your language, your emotional filters
• Leaving out context (because you can't possibly type your whole life story)

So if you ask: "My partner criticises me all the time, what should I do?"

AI might say: "Here's how to set boundaries, here are signs of emotional abuse..."

Which might be relevant. Or it might be missing the 50% of the story where:

• You also criticise them, just in a different style
• You both are stressed and reacting from old triggers
• "Criticism" is sometimes them clumsily asking for help

A human facilitator or therapist will actively check both realities. AI can't.

2. It can sound more certain than it should be

A big danger with AI is its tone.

It can say things like:

• "This is a red flag."
• "You should leave."
• "This behaviour is toxic."

...based on a few paragraphs.

That might feel very validating in the moment, especially if you're hurt. But real-life decisions about:

• Separation / divorce
• Breaking off an engagement
• Going no-contact with family

...need a lot more time, nuance, and support.

AI cannot:

• Hold space for your grief
• Tune into cultural context (joint families, financial dependence, safety nets) in a deep way
• Walk with you through consequences

3. It may increase self-diagnosing and labelling

You know this spiral:

Search + AI →
"Attachment style test" →
"Is my partner a narcissist?" →
"Signs you're being emotionally abused" →
"Trauma bonding explained"

Suddenly, everything becomes a label.

Instead of: "We're in pain and stuck."

It becomes: "You're avoidant, I'm anxious, your mother is toxic, my father is narcissistic."

Labels can be helpful starting points. But over-using them becomes a way to:

• Avoid looking at your own part
• Stop seeing your partner as a full, complex human
• Justify staying in unhealthy dynamics or leaving prematurely

4. It can't replace embodied, relational work

Relationship change doesn't happen because you understand a concept.

It happens when you:

• Speak differently in real time
• Sit with uncomfortable feelings instead of escaping
• Take responsibility and apologise
• Experience safety in someone's eyes, voice, and presence

AI and Google can't give you that.

They can point you in a direction, offer ideas, and give you frameworks. They can't co-regulate your nervous system or read the tiny non-verbal cues between you and your partner.

Google vs ChatGPT: different tools, similar traps

Google is like a chaotic marketplace. Type a question, and it throws 10,000 stalls at you:

• Some genuinely wise
• Some trying to sell you something
• Some written by people having a very bad day

ChatGPT-style tools feel calmer: one voice, neatly structured, easy to follow.

But under the hood, the same traps exist:

• You don't know the source of the ideas
• You don't know if what you're reading fits your culture, stage of life, mental health, or safety realities
• You may mistake "well-written and coherent" for "definitely correct for us"

So again, the safest way to relate to both is: "This is input, not verdict."

A simple rule: Ask AI, Ask Each Other, Ask a Human

Here's a rough framework I often suggest to couples who are tech-comfortable and curious but don't want to outsource their relationship to the algorithm.

1. Ask AI - for information and options

Use it to:

• Learn concepts ("What is stonewalling? What is a repair attempt?")
• Generate lists ("Questions to discuss before moving in together")
• Brainstorm ideas ("Ways to say no more gently", "Date ideas when we're tired and broke")

Treat it like a book or workshop, not a judge.

2. Ask Each Other - for reality and relevance

Once you have some ideas, turn towards each other:

• "Does this pattern feel familiar to you?"
• "Do you agree this describes us? What doesn't fit?"
• "Is there one small thing from this list we want to try this week?"

This is where real relationship work begins: in the conversation between you two, not between you and the screen.

3. Ask a Human - when it feels too big or too stuck

Some issues really deserve a human, trained, accountable presence:

• Repeated, painful fights that never resolve
• Big decisions (engagement, divorce, moving countries, kids)
• Affairs, betrayals, or secret-keeping
• Violence, threats, extreme control, or deep fear
• Intense mental health issues, addiction, trauma

Here, AI should be used (at most) for education and safety planning, not as the main advisor.

This is where you reach out to:

• A therapist / couples counsellor
• A neutral facilitator or mediator (like what we do at TheKaushal.in)
• A trusted mentor or support group

You deserve more than generic, context-blind advice when the stakes are this high.

How AI can sit beside human support, not replace it

If you're already doing human work - in therapy, coaching, or structured conversations like our Partnership Accords - AI can play a gentle supporting role:

• After a session, you might ask it to summarise a concept you discussed in simpler words.
• You could ask for journal prompts to reflect on your triggers or patterns.
• You could get help drafting a message or apology you're struggling to phrase.

But it's the human container - the safe, live relationship where you can cry, pause, interrupt, contradict - that actually allows healing and change.

AI can't hold silence. It can't be noticed that you laughed while talking about something painful. It can't gently turn to your partner and say: "I can see you went quiet just now what's happening inside?"

That's where the work I do at TheKaushal.in feels very different from what any app can offer. We're not just swapping information. We're building skills, awareness, and agreements in a living, breathing space.

So... Can you trust AI for couple advice?

You can trust it for:

• Ideas
• Education
• Language
• Perspective

You cannot blindly trust it for:

• Diagnosing your partner
• Making life-altering decisions
• Replacing all human support
• Telling you "the truth" about your relationship from a few paragraphs

Think of AI like a very smart, very fast, slightly overconfident intern:

• Great at collecting information and drafting first versions
• Not qualified to run the organisation or sign off on final decisions

You and your partner are still the leaders of this relationship. And sometimes, you'll want a trained human guide walking alongside you.

If you find yourself doom-scrolling for answers or asking ChatGPT, "Should I stay or should I leave?"

...that's usually not a sign you need more AI.

It's a sign you might need:

• A calm conversation with your partner
• A neutral space to be fully heard
• Or professional support that can see your whole picture - not just your search history

Tech is here to stay. AI will only get more present in our daily lives. The invitation is not to reject it or surrender to it, but to use it wisely:

As a tool, not a therapist.
As a starting point, not the final word.
As one more resource - in a journey that is still deeply, beautifully human.""",
        "created_at": datetime.now(timezone.utc),
        "updated_at": datetime.now(timezone.utc)
    },
    {
        "id": 12,
        "slug": "mutual-consent-divorce-premarital-prep",
        "title": "Mutual Consent Divorce in India: What Premarital Prep Could Prevent Later",
        "excerpt": "We're going for a mutual consent divorce. We're not enemies... we just can't do this anymore. What kind of premarital preparation might reduce couples who separate simply because they never learned the skills?",
        "author": "Kaushal Team",
        "date": "December 2, 2024",
        "readTime": "17 min read",
        "category": "Partnership",
        "image": "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
        "content": """Mutual Consent Divorce in India: What Premarital Prep Could Prevent Later

On most days at TheKaushal.in, I sit with couples who are pre-marriage or early in their relationship, trying to build something sturdy.

But I've also sat with people who say this with a tired half-smile:

"We're going for a mutual consent divorce. We're not enemies... we just can't do this anymore."

No screaming court battles. No dramatic blame.

Just two people quietly admitting: "This isn't working, and we don't know how to fix it."

And often, as they talk about why things fell apart, I find myself thinking:

"So much of this could have been addressed five years ago - if someone had created space for those conversations."

This article is not about judging anyone who chooses divorce. Sometimes, divorce - even mutual - is the most honest, self-respecting option.

But it is about asking:

What kind of premarital preparation might reduce the number of couples who end up in mutual consent divorce simply because they never learned the skills or had the conversations they needed?

We'll explore:

• What mutual consent divorce actually is in India (in simple language)
• The common "quiet reasons" couples separate
• The premarital prep and conversations that might prevent some of those outcomes
• How tools like a Partnership Accord can give couples a better chance.

First, what is mutual consent divorce in India? (In plain language)

In India, if both spouses agree that the marriage isn't working and they want to end it, they can file for a mutual consent divorce.

Very simply put:

• Both parties jointly file a petition saying:
○ The marriage has broken down.
○ They have agreed on things like alimony/maintenance, child custody, and property division.

• There's usually a cooling-off period (traditionally 6 months) between the first and second motions, meant to give time for reflection or reconciliation.
• Courts have some flexibility now to waive or shorten that period in genuine cases where it's clear the marriage has broken down irretrievably and dragging it out would only cause more harm.

The specifics can vary based on:

• Whether the marriage is under Hindu law, Special Marriage Act, personal laws, etc.
• Court interpretations and recent judgments.

But the emotional core is the same:

"We're not here to fight a war. We just want to end this with as much dignity and minimal damage as possible."

Mutual consent divorce, compared to contested divorces, is:

• Faster
• Less emotionally brutal
• Less financially draining

And yet, the fact that two decent people, often still respectful of each other, end up here is a huge signal: Somewhere along the way, skills, conversations, and structures were missing.

The quiet reasons marriages break - beyond "big scandals"

Contrary to what movies suggest, many mutual consent divorces don't come from one dramatic betrayal.

They come from slow erosion:

• Unspoken expectations
"I thought you'd move to my city/posting."
"I assumed we'd live with my parents."

• Constant misalignment over money
One wants to save aggressively, the other spends freely.
Hidden loans, secret investments, or feeling controlled around money.

• Family interference + no boundaries as a united team
In-laws commenting on everything, parents influencing decisions, partners not standing up for each other.

• Completely mismatched ideas of roles and responsibility
One partner carrying the bulk of home, emotional labour, and sometimes finances; the other not even realising what's unfair.

• Communication that slowly died
No vocabulary for hard conversations, fights that go nowhere, increasing emotional distance.

• Major life transitions without joint planning
Relocation, career leaps, parenthood, elder care - navigated reactively, not as a team.

None of these, taken alone, screams "we must divorce right now". But over years, they can build into a deep, tired sentence:

"We've become strangers. We can coexist, but we can't thrive."

That's where I want to gently bring in the question:

What if many of these "quiet reasons" were treatable upstream, before marriage or early on with:

• Conscious premarital prep
• Structured, neutral conversations
• A written Partnership Accord that both people actually understand and believe in

Would every divorce disappear? Of course not.

But could some couples either:
Not marry in the first place (because they realise they want very different lives), or
Marry with more clarity, realistic expectations, and skills to navigate storms?

I think yes.

Premarital prep isn't about being "negative". It's about being honest.

A lot of couples in India still feel:

"If we talk too much about problems or worst-case scenarios before marriage, we'll jinx it."

So we over-prepare for:

• Wedding décor
• Guest lists
• Outfits, photographers, hashtags

And under-prepare for:

• Division of responsibilities
• Money decisions
• Family boundaries
• Conflict patterns
• Career plans and relocations
• Children or no children, and when

What if we flipped this? What if premarital prep became as normal as wedding shopping?

Not just as a Western fad, but as a deeply Indian, deeply practical act of care.

What premarital prep could prevent later

Let's walk through some of the common reasons couples cite in mutual consent divorce - and the kind of premarital work that might have helped.

1. "We realised we wanted completely different lifestyles."

One wanted: Big city, late nights, travel, maybe not having kids.

The other wanted: Smaller town, close to extended family, children early, stability > adventure.

Premarital prep could have included:

• Guided conversations about:
○ "How do you imagine a normal week five years from now?"
○ "What does 'settled' mean to you?"
○ "Where do you want to live long-term, and why?"
• Honest talk on kids: "Do we both want them? When? How many? How would that change careers?"

Sometimes, couples still choose each other despite differences - and actively build a compromise. But sometimes, these conversations reveal a deep, non-negotiable misalignment. And then the bravest thing might be to not marry, or to adjust the story before it breaks you both.

2. "We never agreed on money."

I hear variations of:

• "I felt like an ATM."
• "I never knew where our money was going."
• "They made big financial decisions without telling me."
• "Our families treated our income like joint family funds; I felt trapped."

Premarital prep could have included:

• Full transparency about:
○ Income
○ Loans and EMIS
○ Financial obligations to parents/siblings
• Agreements on:
○ Joint vs separate accounts
○ How you'll split shared expenses
○ How much you'll save, and for what goals
○ How much support (if any) you're comfortable giving to extended family, and from which pool

This is where a Partnership Accord shines: it writes down the financial philosophy you both commit to, knowing it can evolve but won't be random.

3. "Our families were always in between us."

Common stories:

• "My spouse never prioritised me in front of their parents."
• "Every argument became a whole-family issue."
• "We could never set boundaries with in-laws without it becoming World War III."

Premarital prep could have included:

• Mapping expectations:
○ "How involved will parents be in day-to-day decisions?"
○ "What's okay to share with them, and what stays between us?"
○ "How often will we visit or host them?"
• Clear agreements like:
○ "We won't talk about our serious fights with our parents in the heat of anger."
○ "We both have the right to say, 'This is between us; we'll handle it'."
○ "In front of families, we will not insult or discredit each other."

Again, this isn't anti-family. It's about creating a strong couple unit that can then engage with families from a place of stability, not fragmentation.

4. "We could not handle major life changes together."

Some couples say:

• "The move abroad broke us."
• "After the baby, we lost our connection completely."
• "When my parents fell ill, everything became about caregiving and we never recovered."

Premarital prep could have included:

• Talking through likely scenarios:
○ "What if one of us gets an overseas offer?"
○ "What if one of us wants a career break or further studies?"
○ "What if our parents need intensive care later?"
• And then asking:
○ "Whose career takes priority when?"
○ "Where would we be willing (or unwilling) to relocate?"
○ "How will we share caregiving - for children and for elders?"

Life will still surprise you, of course. But having thought about these once, calmly, means you're not starting from zero when a crisis hits.

5. "We never learned how to fight well."

Many mutual consent couples say some version of: "We weren't bad people. We just didn't know how to handle conflict. Over time, the damage piled up."

Patterns like:

• Silent treatment
• Name-calling
• Bringing up old mistakes in every new fight
• Threatening divorce in every argument
• Shutting down and refusing to talk for days

Premarital prep could have included:

• Learning basic relational skills:
○ Softening how you bring up issues
○ Using time-outs properly (without avoidance)
• Repairing after fights
• Differentiating between "I'm upset" and "You're a terrible person"

This is where viewing marriage as a skill becomes so important - and why I built The Kaushal around that tagline.

If we normalise learning communication and conflict resolution like we learn driving or swimming, fewer couples will reach the point of saying:

"We broke what could have been fixed, because no one told us how."

So what does good premarital prep actually look like?

Not "aunties giving random advice." Not just checking surface-level compatibility.

At The Kaushal, premarital or early-marriage work often includes:

• Deep-dive conversations across:
○ Money
○ Roles & responsibilities
○ Families & boundaries
○ Careers & relocation
○ Intimacy & privacy
○ Children, if relevant
○ Values and long-term life vision

• Naming patterns you're both already aware of:
○ How you each respond to stress
○ How you each reacted in past relationships or conflicts

• Creating a written Partnership Accord:
○ Not a cold prenup, but a relationship constitution
○ A document that records your shared understanding of:
■ How you'll make decisions
■ How you'll handle disagreements
■ How you'll respond to major life events
○ Something you can revisit and revise, not a one-time formality

The point isn't to guarantee "no divorce ever".

The point is:

• If you do marry, you do it with open eyes, realistic expectations, and tools.
• If you realise this partnership would require one or both of you to betray your deepest values, you have the chance to course-correct before there are legal papers, houses, or children in the mix.

Both outcomes are successful in my book. Because both are rooted in clarity, consent, and courage.

Divorce is not always preventable - but preventable pain is

I want to end with something important: You can do all the premarital prep in the world and still end up divorced.

People change.
Mental health shifts.
Addictions appear.
Affairs happen.
New truths about sexuality or identity emerge.
Sometimes love is there but respect is not, or safety is not.

In those cases, mutual consent divorce can be an act of maturity and self-respect.

This article is not about shaming anyone who's walked that path. It is about asking:

• How many people are divorcing not because "marriage is pointless", but because they were never supported to learn how to be partners?
• How many relationships broke not from evil intent, but from repeated misalignments that were addressable - if someone had intervened earlier?

If you're engaged, considering marriage, newly married, or even a few years in and thinking:

"We're not in a crisis yet, but we're not as aligned as we want to be..."

That's exactly the time to lean in, not wait.

Premarital and early-marriage support - through Partnership Accords, guided sessions, and honest conversation - won't magically immunise you from pain.

But it can:

• Reduce preventable misunderstandings
• Give you skills to repair instead of silently drift
• Make sure that if you do ever part, it will never be because you didn't even know what was possible

And if you stay - by choice, not by pressure - you'll be building something far more interesting than "happily ever after":

Two people who know that love alone isn't enough, but love + skills + courage + conversation just might be.""",
        "created_at": datetime.now(timezone.utc),
        "updated_at": datetime.now(timezone.utc)
    }
]

async def seed_blogs():
    client = AsyncIOMotorClient(MONGO_URL)
    db = client.kaushal_db
    
    try:
        result = await db.blogs.insert_many(new_blogs)
        print(f"Successfully inserted {len(result.inserted_ids)} new blog posts (11-12)")
        
        count = await db.blogs.count_documents({})
        print(f"Total blogs in database now: {count}")
        
        # List all blog titles
        blogs = await db.blogs.find({}, {"_id": 0, "id": 1, "title": 1}).sort("id", 1).to_list(100)
        print("\nAll blogs in database:")
        for blog in blogs:
            print(f"  {blog['id']}. {blog['title']}")
        
    except Exception as e:
        print(f"Error: {e}")
    finally:
        client.close()

if __name__ == "__main__":
    print("Adding 2 new blog posts...")
    asyncio.run(seed_blogs())
    print("Complete!")
