// Blog articles data
export const blogPosts = [
  {
    id: 1,
    slug: "pre-marital-partnership-accord",
    title: "Why a Pre-Marital Partnership Accord is More Relevant Than Ever",
    excerpt: "Marriage today isn't what it was even 10 or 15 years ago. We have dual incomes, EMIs, live-in relationships, blended families, and yet, most couples still walk into marriage with nothing more than 'we'll figure it out' as a plan.",
    author: "Kaushal Team",
    date: "December 1, 2024",
    readTime: "12 min read",
    category: "Partnership",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
    content: `Marriage today isn't what it was even 10 or 15 years ago. We have dual incomes, EMIs, live-in relationships, blended families, remote work, global mobility, and yet, most couples still walk into marriage with nothing more than "we'll figure it out" as a plan.

As someone who thinks of relationships as a skill (not just a feeling), I can tell you this: "We'll see when it comes" is not a strategy. It's a gamble.

That's exactly where a Pre-Marital Partnership Accord comes in.`
  },
  {
    id: 2,
    slug: "money-talks-financial-conversations",
    title: "Money Talks: 5 Financial Conversations Every Couple Should Have Before Tying the Knot",
    excerpt: "Most couples will happily spend hours discussing the wedding menu... but freeze the moment the word 'money' comes up. Money is deeply emotional. It's woven into security, freedom, fairness, respect, and power.",
    author: "Kaushal Team",
    date: "November 28, 2024",
    readTime: "10 min read",
    category: "Finance",
    image: "https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
    content: `Most couples will happily spend hours discussing the wedding menu... but freeze the moment the word "money" comes up.

"I don't want to sound greedy."
"What if they think I don't trust them?"
"Let's talk later na, once we're married. We'll see."

At TheKaushal.in, I see this pattern all the time. Smart, loving, educated couples who will compare lehenga swatches with spreadsheets-level detail - but have never actually sat down and said: "Okay, how are we going to run our financial life together?"`
  },
  {
    id: 3,
    slug: "family-integration-and-boundaries",
    title: "From Two Families to One Future: Navigating Family Integration and Boundaries",
    excerpt: "In almost every couple session, there's a moment when one of them sighs and says: 'If it was just the two of us, we'd be fine. It's the families that make everything complicated.' You don't just marry a person. You marry their family culture.",
    author: "Kaushal Team",
    date: "November 25, 2024",
    readTime: "11 min read",
    category: "Family Dynamics",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
    content: `In almost every couple session I've done at TheKaushal.in, there's a moment when one of them sighs and says some version of:

"If it was just the two of us, we'd be fine. It's the families that make everything complicated."

And they're not wrong.

You don't just marry a person. In India especially, you marry:
- Their parents
- Their family culture
- Their festivals and rituals
- Their unspoken expectations about "izzat", duty, and "log kya kahenge"`
  },
  {
    id: 4,
    slug: "communication-styles-relationships",
    title: "Communication Styles in Relationships: How to Be Heard & Understood",
    excerpt: "Most couples are talking. What's missing is feeling heard and understood. One person shuts down when conflict appears, the other raises their voice to feel less invisible. Learn practical tools for better communication.",
    author: "Kaushal Team",
    date: "November 22, 2024",
    readTime: "13 min read",
    category: "Communication",
    image: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
    content: `If I had to pick one sentence I hear most often in sessions at TheKaushal.in, it would be this: "We do talk... but somehow, we still don't understand each other."

They're not lying. Most couples are talking.

What's missing is feeling heard and understood.

One person shuts down when conflict appears, the other raises their voice to feel less invisible. One wants to fix the problem logically, the other wants to feel emotionally held.`
  },
  {
    id: 5,
    slug: "career-aspirations-partnership",
    title: "Career Aspirations & Partnership: Aligning Dreams Without Sacrificing the Relationship",
    excerpt: "I love them, and I love my work. I just don't know how to do both without someone losing. Ambition isn't the exception anymore. Learn how to align dreams without sacrificing your relationship.",
    author: "Kaushal Team",
    date: "November 20, 2024",
    readTime: "12 min read",
    category: "Career & Growth",
    image: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
    content: `A sentence I hear a lot in sessions at TheKaushal.in goes something like:

"I love them, and I love my work. I just don't know how to do both without someone losing."

We're living in a time where:
- One partner wants to scale a startup
- The other dreams of a PhD abroad
- Someone's company may relocate them to another country
- Someone else is quietly burning out and craving a gap year

Ambition isn't the exception anymore. It's the default.`
  }
];

export const getBlogPost = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRelatedPosts = (currentSlug, limit = 3) => {
  return blogPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, limit);
};
