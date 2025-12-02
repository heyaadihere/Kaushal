import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

MONGO_URL = os.environ['MONGO_URL']

# Full content extracted from remaining PDFs
blogs_6_to_10 = [
    {
        "id": 6,
        "slug": "conflict-doesnt-mean-failure",
        "title": "Conflict Doesn't Mean Failure: How to Use Disagreements as Opportunities to Grow",
        "excerpt": "We keep fighting. Does that mean we're not right for each other? There's usually shame behind that question. Here's what I've seen: Couples who learn how to fight well usually end up stronger, not weaker.",
        "author": "Kaushal Team",
        "date": "November 18, 2024",
        "readTime": "15 min read",
        "category": "Communication",
        "image": "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
        "content": """Conflict Doesn't Mean Failure: How to Use Disagreements as Opportunities to Grow

One of the most common fears I hear in sessions at TheKaushal.in is this:
"We keep fighting. Does that mean we're not right for each other?"
There's usually shame behind that question.
People imagine that "good couples" barely fight, agree on everything, and glide through decisions with soft background music and mutual understanding.
If that's the standard, then yes - almost every real relationship is failing.
Here's what I've seen, again and again:
• Couples who never fight often aren't closer - they're just better at avoiding things.
• Couples who learn how to fight well - with honesty, repair, and respect - usually end up stronger, not weaker.
Conflict doesn't mean failure. It means two different human beings with different histories, triggers, and needs are trying to build one life.

This article is about how to turn those inevitable clashes into opportunities to grow - as individuals and as a partnership.

We'll talk about:
• Why conflict isn't automatically a red flag
• A simple framework to handle disagreements
• De-escalation tips when things get heated
• When it's wise to seek neutral help
• Real-life style "do & don't" dialogues

Conflict is a signal, not a verdict

Think of conflict like a check-engine light on your car.
When it comes on, it's not saying: "This car is useless - throw it away."
It's saying: "Hey, something underneath needs attention."

In relationships, conflict is often signalling one of three things:

1. Unmet needs
"I don't feel heard."
"I miss you."
"I feel alone in the responsibilities."

2. Unclear or mismatched expectations
"I thought we'd spend weekends together."
"I assumed we'd support my parents financially."
"I expected you'd tell me before making big decisions."

3. Unhealed old stuff
Childhood wounds
Past relationships
Old patterns of not feeling good enough, safe, or chosen

The problem is: we rarely say, "Hey, I'm feeling deeply unseen and scared right now."
We say things like:
"You're always on your phone."
"You don't care about anyone but yourself."

The conversation ends up being about phones, dishes, tone, time, when underneath, it's about love, safety, respect, and belonging.
Conflict becomes growth when we learn to move from the surface to the root - kindly.

How to handle conflict: The CARE Framework

Here's a simple framework you can use during disagreements:

C - Calm Down First
A - Articulate the Real Issue
R - Respond, Don't React
E - End with Repair

Let's break it down.

C - Calm Down First

When you're flooded with emotion - heart racing, thoughts spiraling, ready to explode - your brain literally can't process nuance.

At that moment, trying to "talk it out" usually makes things worse.

Instead:
• Name it: "I'm too upset to talk about this productively right now."
• Pause: "Can we take 15 minutes and come back to this?"
• Self-soothe: Walk, breathe, journal, splash water on your face

The goal isn't to suppress emotion. It's to come back to the conversation when you can actually hear each other.

A - Articulate the Real Issue

Most fights aren't about what they're about.

Surface Issue:
"You never help with housework."

Real Issue:
"I feel like I'm invisible. I'm exhausted and you don't notice."

Surface Issue:
"You're always working late."

Real Issue:
"I miss you. I feel like we're roommates, not partners."

Before you speak, ask yourself:
• What am I really upset about?
• What do I actually need?

Then say that - not the angry version.

R - Respond, Don't React

Reacting is: "You're so selfish!"
Responding is: "When you canceled our plans without checking in, I felt hurt."

Reacting attacks character.
Responding describes behavior and impact.

Use this formula:
"When you [specific behavior], I felt [emotion]. What I need is [request]."

Example:
"When you scrolled on your phone during dinner, I felt ignored. I need us to have 20 minutes where we're both fully present."

E - End with Repair

Even if you don't resolve the issue immediately, end the conversation on a note of connection:

• "I love you, even when we disagree."
• "Thank you for hearing me out."
• "Let's come back to this tomorrow with fresh eyes."

Repair doesn't mean pretending nothing happened. It means: "We're still a team, even when it's hard."

De-escalation techniques when things get heated

Sometimes, even with the best intentions, conversations spiral. Here's how to pull back:

1. Use the Timeout Signal
Agree in advance on a word or gesture that means: "I need a break."
No shame, no punishment - just pause.

2. Name What's Happening
"I notice we're both raising our voices. Can we slow down?"

3. Soften Your Startup
How you start a conversation predicts how it will go.
Instead of: "You never listen!"
Try: "Hey, can we talk about something that's been bugging me?"

4. Look for the 5% You Can Agree On
Even in heated arguments, there's usually something you both want.
"We both want to feel respected, right? Let's start there."

5. Avoid These Four Toxic Patterns (The "Four Horsemen")

Researcher John Gottman identified four behaviors that predict relationship failure:

• Criticism: Attacking character ("You're so lazy")
• Contempt: Mocking, sarcasm, disgust
• Defensiveness: "I didn't do anything wrong! You're the problem."
• Stonewalling: Shutting down, silent treatment

If you notice these creeping in, stop and reset. Say:
"I'm falling into a bad pattern. Let me try again."

Real-life "Do & Don't" dialogues

Scenario: Your partner forgot an important date

❌ DON'T:
"You always forget everything. You don't care about me at all."

✅ DO:
"I'm really hurt that you forgot our anniversary. It made me feel like I'm not a priority. Can we talk about how to make sure important things don't slip through the cracks?"

Scenario: You feel overwhelmed with housework

❌ DON'T:
"I do everything around here while you sit and relax. You're useless."

✅ DO:
"I'm feeling really burnt out from managing most of the housework. Can we sit down and create a more balanced system?"

Scenario: Your partner criticizes your family

❌ DON'T:
"How dare you talk about my family like that! Yours isn't perfect either!"

✅ DO:
"I felt defensive when you criticized my family. I know they're not perfect, but they're important to me. Can you share what's really bothering you without putting them down?"

When to seek outside help

Some conflicts you can work through on your own. Others need support.

Seek help if:
• You keep having the same fight with no resolution
• One or both of you feels unsafe (emotionally or physically)
• Trust has been broken (infidelity, lies, etc.)
• You can't talk without it escalating into shouting or silence
• One of you is threatening to leave
• Resentment has built up for years

There's no shame in getting help. In fact, it's one of the most mature things you can do.

At TheKaushal.in, we help couples break stuck patterns, learn healthier communication, and rebuild connection - before small cracks become big fractures.

What healthy conflict looks like

Healthy conflict doesn't mean you never fight.
It means:
• You fight about issues, not each other's character
• You listen, even when it's hard
• You apologize and mean it
• You forgive and let go
• You learn and adjust

It means you can look back on a fight and say:
"That was hard, but we got through it. And now we understand each other better."

A final thought

If you're reading this and thinking, "We fight a lot - maybe we're just not compatible," pause.

Ask yourself:
• Are you fighting about the same thing repeatedly without resolution? (That's a stuck pattern, not incompatibility.)
• Are you fighting in ways that tear each other down? (That's a skill issue, not incompatibility.)
• Are you both willing to learn better ways to communicate? (If yes, you can absolutely grow past this.)

Conflict isn't the problem.
Contempt, avoidance, and the refusal to repair - those are the problems.

If you're willing to fight fair, to own your part, and to keep showing up - you're already doing better than most.

At TheKaushal.in, we believe relationships are skills you build, not tests you pass or fail.

If you want help learning how to turn conflict into connection, we're here.

But even if you never work with us, remember this:

Disagreements don't mean you're broken.
They mean you're real.
And with the right tools, they can make you better - in real time.""",
        "created_at": datetime.now(timezone.utc),
        "updated_at": datetime.now(timezone.utc)
    },
    {
        "id": 7,
        "slug": "intimacy-boundaries-expectations",
        "title": "Intimacy, Boundaries & Expectations: Starting Marriage with Clarity",
        "excerpt": "What if, after marriage or moving in, I lose myself? We talk so much about love and compatibility, but far less about intimacy, boundaries, and expectations. This article is for you if you're about to get married or move in together.",
        "author": "Kaushal Team",
        "date": "November 15, 2024",
        "readTime": "14 min read",
        "category": "Intimacy & Boundaries",
        "image": "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
        "content": """Intimacy, Boundaries & Expectations: Starting Marriage (or Cohabitation) with Clarity

One of the quiet fears people bring into sessions at The Kaushal sounds like this:
"What if, after marriage or moving in, I lose myself?"
"What if they expect more than I'm comfortable giving - physically, emotionally, even online?"

We talk so much about love and compatibility, but far less about something just as crucial:
Intimacy + Boundaries + Expectations.

Not the most glamorous trio - but absolutely foundational if you want a relationship that feels close and safe, loving and respectful.

This article is for you if you're about to:
* Get married
* Move in together
* Or you're already living together and thinking, "We should have talked about this earlier."

We will explore:
* What intimacy really means (beyond just physical)
* Why boundaries protect love, not kill it
* How consent, privacy, families, and digital life all fit into this picture
* Reflective questions you and your partner can use to start real conversations

Take what resonates. Adapt the language to your own relationship. The goal isn't perfection - it's clarity with kindness.

Intimacy is more than "being physical"

When people hear intimacy, most jump straight to sex or physical closeness. But in long-term partnerships, intimacy is broader and deeper. It includes:

* Emotional intimacy - Feeling safe to say, "I'm scared," "I'm jealous," "I messed up," without fearing you'll be mocked or abandoned.
* Intellectual intimacy - Sharing ideas, disagreements, dreams, and worldviews - and staying curious about each other's inner world.
* Everyday intimacy - The small rituals - chai together, inside jokes, bedtime debriefs, random hugs while one of you cooks.
* Physical intimacy - Everything from holding hands and cuddling to sexual connection - navigated with mutual consent and comfort.

A lot of couples discover after moving in that their definitions don't fully match:
* One person wants deep emotional sharing; the other isn't used to talking about feelings.
* One craves more non-sexual touch (hugs, cuddles); the other only initiates physical contact when they want sex.
* One loves verbal "I love you's; the other shows love by doing things, not saying things.

When you don't talk about this, the gap fills with stories:
"If they don't touch me, they're not attracted to me."
"If they need constant reassurance, I'll never be enough."

Intimacy grows when you can say, gently:
"This is what makes me feel close to you."
"This part is still hard for me, but I want to learn."

Why boundaries protect intimacy (not destroy it)

This is counterintuitive:
Most people think boundaries = distance.
Actually, boundaries = safety.

When you can say no to things that drain or hurt you, your yes means something real.

Examples of healthy boundaries in intimate relationships:

* Physical: "I love you, but I'm not in the mood tonight. Can we cuddle instead?"
* Emotional: "I need 30 minutes alone to decompress after work before we dive into conversations."
* Time: "Thursday evenings are for my hobby. That's non-negotiable for me."
* Digital: "I'm okay sharing passwords, but I'd like my journal and therapy notes to stay private."
* Family: "I love your parents, but I need advance notice before they visit."

Notice: None of these reject the partner. They just create space for self, which ultimately protects the relationship.

The couples who struggle most aren't the ones with boundaries - they're the ones with no boundaries, who slowly lose themselves and then resent their partner for it.

Consent isn't just a one-time conversation

We talk about consent before sex. But in long-term relationships, consent shows up everywhere:

* Physical consent (obviously): No one owes anyone sex, ever - marriage doesn't change that.
* Emotional consent: "Can I vent about my day, or is this a bad time?"
* Social consent: "Is it okay if I share this story about us with my friends?"
* Digital consent: "Can I post this photo of you?"

Ongoing consent means: you keep checking in. You don't assume yesterday's yes is today's yes.

It sounds tedious, but in practice, it becomes second nature - and it builds so much trust.

Expectations: The invisible contract

Every relationship runs on unspoken expectations:
* How much sex is "normal"?
* Who initiates?
* How affectionate should we be in public?
* Do we share everything, or is some privacy okay?
* How do we handle attraction to other people?

The problem isn't having expectations. The problem is not naming them.

Example:
Person A grew up in a family that hugged constantly. To them, physical touch = love.
Person B grew up in a more reserved household. To them, too much touch feels suffocating.

If they don't talk about this, both will feel hurt - and both will be confused about why.

Conversation starters:

* "What does physical closeness mean to you? How much do you need to feel connected?"
* "How do you feel about public displays of affection?"
* "What's your relationship with sex - is it something you need regularly, or are you okay with it being more spontaneous?"
* "Is there anything you're nervous or unsure about when it comes to physical intimacy?"

These aren't one-and-done talks. They're ongoing.

Privacy in a partnership

This one trips people up:
"If we're married, shouldn't we share everything?"

Not necessarily.

Healthy relationships have room for:
* Private thoughts (journals, therapy notes)
* Individual friendships
* Separate hobbies and interests
* Some financial autonomy (within agreed limits)

Unhealthy relationships insist on total transparency in a way that feels controlling:
* Reading each other's messages without asking
* Getting upset when your partner talks to friends about relationship struggles
* Demanding to know every detail of their day

The line between intimacy and invasion is: Do you feel trusted, or surveilled?

Questions to discuss:

* "Do you feel comfortable with us having each other's phone passwords?"
* "Is there anything you'd prefer to keep private - not because you're hiding something, but because it's just yours?"
* "How do you feel about me talking to my friends or family about our relationship?"

Families, in-laws, and the new boundaries you'll need

When you get married or move in, family dynamics shift.

Suddenly:
* Your parents may expect you home every weekend
* In-laws may feel entitled to drop by unannounced
* Extended family may weigh in on decisions that aren't theirs to make

You and your partner need to get on the same page about:

* How much involvement do we want from our families?
* Whose job is it to set boundaries with whose family?
* How do we handle unsolicited advice or criticism?

Questions to discuss:

* "How involved do you imagine our families being in our daily life?"
* "If your family crosses a line, do you want me to speak up, or would you prefer to handle it?"
* "What holidays or family events are non-negotiable for you?"

Digital life and modern intimacy

This is new territory. Your parents didn't have to navigate:
* Sharing passwords
* Social media boundaries
* Digital jealousy ("Why did you like their photo?")
* Porn and online interactions

Every couple has to figure out their own rules here. There's no universal right answer - only what works for you two.

Questions to explore:

* "Are you comfortable with us following each other's exes on social media?"
* "How do you feel about me posting photos or stories about our relationship?"
* "Is there anything related to phones or online behavior that would feel like a betrayal to you?"

Again: no judgment, just clarity.

What to do when expectations don't match

You won't align on everything immediately. And that's okay.

Here's what to do when you hit a mismatch:

1. Name it without blame
"I notice we see this differently. Let's talk about it."

2. Explore the why
"Why is this important to you?"
"What are you worried will happen if we do it differently?"

3. Look for middle ground
You don't have to choose between Person A's way and Person B's way. There's often a third option that works for both.

4. Revisit it periodically
What works in year 1 may not work in year 5. Check in regularly.

A real-life example

Neha and Vikram moved in together after two years of dating.

Neha expected:
* Daily debriefs about their days
* Lots of cuddling and physical closeness
* Joint social life - they'd attend events together

Vikram expected:
* More independent routines
* Physical closeness mainly in sexual contexts
* Separate friend circles with occasional overlap

Neither was wrong. But if they hadn't talked about it, they'd have spent months feeling rejected and confused.

Instead, they compromised:
* 15-minute daily check-ins (Neha's need)
* Two nights a week for solo socializing (Vikram's need)
* More non-sexual touch, which Vikram learned to initiate (Neha's need)
* Clear communication when one of them needed alone time (Vikram's need)

It wasn't perfect. But it worked because they designed it together.

Red flags: When boundaries are being violated

Healthy intimacy invites. Unhealthy intimacy demands.

Watch out for:
* Guilt trips when you say no
* Pressure to share passwords, locations, or private thoughts
* Anger or punishment when you need space
* Dismissing your feelings or needs as "too sensitive"

If these patterns are present, it's not about intimacy - it's about control. And that's worth addressing, possibly with professional support.

A final thought: Intimacy without losing yourself

The fear at the beginning of this article was: "What if I lose myself?"

Here's the truth:
You will lose yourself - if you don't name your needs, set boundaries, and keep checking in.

But if you do those things?
You get to be deeply intimate and still fully you.

At TheKaushal.in, we help couples have these exact conversations - the ones that feel awkward or vulnerable or too much.

But whether you work with us or not, the invitation is the same:

Sit with your partner and say:
"I want us to be close. And I want to make sure we both feel safe, respected, and seen. Let's talk about what that looks like for each of us."

That's the conversation that builds real intimacy - not the glossy, Instagram kind, but the kind that lasts.

Because at the end of the day, love isn't just about holding someone close.

It's about creating a relationship where closeness doesn't cost you yourself - and where being yourself doesn't mean losing connection.

That's the balance. And it's worth every awkward, necessary conversation it takes to find it.""",
        "created_at": datetime.now(timezone.utc),
        "updated_at": datetime.now(timezone.utc)
    }
]

async def seed_blogs():
    client = AsyncIOMotorClient(MONGO_URL)
    db = client.kaushal_db
    
    try:
        result = await db.blogs.insert_many(blogs_6_to_10[:2])  # First adding 6-7
        print(f"Successfully inserted {len(result.inserted_ids)} blog posts (6-7)")
        
        count = await db.blogs.count_documents({})
        print(f"Total blogs in database now: {count}")
        
    except Exception as e:
        print(f"Error: {e}")
    finally:
        client.close()

if __name__ == "__main__":
    print("Adding blogs 6-7...")
    asyncio.run(seed_blogs())
    print("Done!")
