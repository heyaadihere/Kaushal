// Blog articles data
export const blogPosts = [];

export const getBlogPost = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRelatedPosts = (currentSlug, limit = 3) => {
  return blogPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, limit);
};
