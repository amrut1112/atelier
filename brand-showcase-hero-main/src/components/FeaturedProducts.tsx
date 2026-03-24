import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Product {
  id: string;
  name: string;
  description: string;
  image_url: string;
  category: string;
  price: number;
  featured: boolean;
}

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('featured', true)
          .order('created_at', { ascending: false });

        if (error) throw error;
        setProducts(data || []);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Fallback to hardcoded data if database fails
        setProducts([
          { id: '1', name: 'Folding Door', description: '', image_url: '/assets/folding door.jpg', category: 'doors', price: 25000, featured: true },
          { id: '2', name: 'Sliding Door', description: '', image_url: '/assets/sliding door.jpg', category: 'doors', price: 30000, featured: true },
          { id: '3', name: 'Openable Door', description: '', image_url: '/assets/openable door.jpg', category: 'doors', price: 20000, featured: true },
          { id: '4', name: 'Ghost Door', description: '', image_url: '/assets/ghost door.jpg', category: 'doors', price: 35000, featured: true },
          { id: '5', name: 'Fixed Partition', description: '', image_url: '/assets/fix partition.jpg', category: 'partitions', price: 15000, featured: true },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="relative group rounded-xl overflow-hidden shadow-lg bg-muted animate-pulse h-72" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="relative group rounded-xl overflow-hidden shadow-lg">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-primary-foreground text-lg font-semibold font-display mb-1">
                  {product.name}
                </h3>
                {product.price && (
                  <p className="text-primary-foreground/80 text-sm">
                    ₹{product.price.toLocaleString()}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      {/* Instagram Reel */}
      <div className="mt-16 flex flex-col items-center">
        <h3 className="text-2xl font-bold font-display text-center mb-6">
          Watch Us on <span className="text-primary">Instagram</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {[
            "https://www.instagram.com/reel/DVwOnVKiMCX/embed",
            "https://www.instagram.com/reel/DViApqEy4xR/embed",
            "https://www.instagram.com/reel/DVS6fqtSbr3/embed",
          ].map((url, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={url}
                className="w-full border-0"
                height="500"
                allowFullScreen
                title={`Atelier Instagram Reel ${i + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <a
          href="https://www.instagram.com/amrut_doorsystem_/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-primary hover:underline font-semibold"
        >
          Follow us on Instagram →
        </a>
      </div>
    </div>
  </section>
);

export default FeaturedProducts;
