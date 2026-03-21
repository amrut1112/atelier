const blogPosts = [
  { date: "December 26, 2025", title: "15 Interior Design Tips to Know Before You Start...", excerpt: "Designing a home is one of those experiences that stays with you. This experience is exciting, sometimes..." },
  { date: "December 24, 2025", title: "Space Saving Wardrobe Design Hacks for Small...", excerpt: "Modern urban homes have changed the way wardrobes are designed and experienced. No longer limited to..." },
  { date: "October 18, 2025", title: "Create a Stylish Space with These Wardrobe Colour...", excerpt: "Every colour says something about you – calm, bold, elegant, or adventurous. Your bedroom deserv..." },
];

const BlogSection = () => (
  <section id="blog" className="py-20 bg-muted">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-12">
        Latest <span className="text-primary">Blogs</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.title} className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <span className="text-primary text-sm font-medium">{post.date}</span>
              <h3 className="text-lg font-bold font-display text-foreground mt-2 mb-3">{post.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <button className="border border-primary text-primary px-6 py-2 rounded hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium w-full">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
