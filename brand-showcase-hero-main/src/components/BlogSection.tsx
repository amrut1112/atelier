import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  published_at: string;
}

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .not('published_at', 'is', null)
          .order('published_at', { ascending: false })
          .limit(3);

        if (error) throw error;
        setBlogPosts(data || []);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        // Fallback to hardcoded data if database fails
        setBlogPosts([
          { id: '1', title: "15 Interior Design Tips to Know Before You Start...", excerpt: "Designing a home is one of those experiences that stays with you. This experience is exciting, sometimes...", content: "", published_at: "2025-12-26T00:00:00Z" },
          { id: '2', title: "Space Saving Wardrobe Design Hacks for Small...", excerpt: "Modern urban homes have changed the way wardrobes are designed and experienced. No longer limited to...", content: "", published_at: "2025-12-24T00:00:00Z" },
          { id: '3', title: "Create a Stylish Space with These Wardrobe Colour...", excerpt: "Every colour says something about you – calm, bold, elegant, or adventurous. Your bedroom deserv...", content: "", published_at: "2025-10-18T00:00:00Z" },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return (
      <section id="blog" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-12">
            Latest <span className="text-primary">Blogs</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-card rounded-xl overflow-hidden shadow-md animate-pulse h-64" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-12">
          Latest <span className="text-primary">Blogs</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <span className="text-primary text-sm font-medium">
                  {new Date(post.published_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
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
};

export default BlogSection;
