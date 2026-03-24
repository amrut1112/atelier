import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

interface Product {
  id: string;
  name: string;
  description: string;
  image_url: string;
  category: string;
  price: number;
  featured: boolean;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  published_at: string;
}

const AdminDashboard = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'products' | 'blogs'>('products');

  // Form states
  const [productForm, setProductForm] = useState({
    name: '',
    description: '',
    image_url: '',
    category: '',
    price: '',
    featured: false
  });

  const [blogForm, setBlogForm] = useState({
    title: '',
    excerpt: '',
    content: '',
    published_at: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [productsRes, blogsRes] = await Promise.all([
        supabase.from('products').select('*').order('created_at', { ascending: false }),
        supabase.from('blog_posts').select('*').order('created_at', { ascending: false })
      ]);

      if (productsRes.error) throw productsRes.error;
      if (blogsRes.error) throw blogsRes.error;

      setProducts(productsRes.data || []);
      setBlogPosts(blogsRes.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.from('products').insert({
        name: productForm.name,
        description: productForm.description,
        image_url: productForm.image_url,
        category: productForm.category,
        price: parseFloat(productForm.price),
        featured: productForm.featured
      });

      if (error) throw error;

      toast.success('Product added successfully');
      setProductForm({ name: '', description: '', image_url: '', category: '', price: '', featured: false });
      fetchData();
    } catch (error) {
      console.error('Error adding product:', error);
      toast.error('Failed to add product');
    }
  };

  const handleAddBlogPost = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.from('blog_posts').insert({
        title: blogForm.title,
        excerpt: blogForm.excerpt,
        content: blogForm.content,
        published_at: blogForm.published_at || new Date().toISOString()
      });

      if (error) throw error;

      toast.success('Blog post added successfully');
      setBlogForm({ title: '', excerpt: '', content: '', published_at: '' });
      fetchData();
    } catch (error) {
      console.error('Error adding blog post:', error);
      toast.error('Failed to add blog post');
    }
  };

  const handleDeleteProduct = async (id: string) => {
    try {
      const { error } = await supabase.from('products').delete().eq('id', id);
      if (error) throw error;
      toast.success('Product deleted');
      fetchData();
    } catch (error) {
      toast.error('Failed to delete product');
    }
  };

  const handleDeleteBlogPost = async (id: string) => {
    try {
      const { error } = await supabase.from('blog_posts').delete().eq('id', id);
      if (error) throw error;
      toast.success('Blog post deleted');
      fetchData();
    } catch (error) {
      toast.error('Failed to delete blog post');
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-8">
        <Button
          variant={activeTab === 'products' ? 'default' : 'outline'}
          onClick={() => setActiveTab('products')}
        >
          Products
        </Button>
        <Button
          variant={activeTab === 'blogs' ? 'default' : 'outline'}
          onClick={() => setActiveTab('blogs')}
        >
          Blog Posts
        </Button>
      </div>

      {activeTab === 'products' && (
        <div className="space-y-8">
          {/* Add Product Form */}
          <Card>
            <CardHeader>
              <CardTitle>Add New Product</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddProduct} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Product Name"
                    value={productForm.name}
                    onChange={(e) => setProductForm({...productForm, name: e.target.value})}
                    required
                  />
                  <Input
                    placeholder="Category"
                    value={productForm.category}
                    onChange={(e) => setProductForm({...productForm, category: e.target.value})}
                    required
                  />
                  <Input
                    placeholder="Image URL"
                    value={productForm.image_url}
                    onChange={(e) => setProductForm({...productForm, image_url: e.target.value})}
                    required
                  />
                  <Input
                    type="number"
                    placeholder="Price"
                    value={productForm.price}
                    onChange={(e) => setProductForm({...productForm, price: e.target.value})}
                    required
                  />
                </div>
                <Textarea
                  placeholder="Description"
                  value={productForm.description}
                  onChange={(e) => setProductForm({...productForm, description: e.target.value})}
                />
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={productForm.featured}
                    onChange={(e) => setProductForm({...productForm, featured: e.target.checked})}
                  />
                  <label htmlFor="featured">Featured Product</label>
                </div>
                <Button type="submit">Add Product</Button>
              </form>
            </CardContent>
          </Card>

          {/* Products List */}
          <Card>
            <CardHeader>
              <CardTitle>Existing Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {products.map((product) => (
                  <div key={product.id} className="flex items-center justify-between p-4 border rounded">
                    <div>
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.category} - ₹{product.price}</p>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      Delete
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === 'blogs' && (
        <div className="space-y-8">
          {/* Add Blog Post Form */}
          <Card>
            <CardHeader>
              <CardTitle>Add New Blog Post</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddBlogPost} className="space-y-4">
                <Input
                  placeholder="Blog Title"
                  value={blogForm.title}
                  onChange={(e) => setBlogForm({...blogForm, title: e.target.value})}
                  required
                />
                <Textarea
                  placeholder="Excerpt"
                  value={blogForm.excerpt}
                  onChange={(e) => setBlogForm({...blogForm, excerpt: e.target.value})}
                  required
                />
                <Textarea
                  placeholder="Full Content"
                  value={blogForm.content}
                  onChange={(e) => setBlogForm({...blogForm, content: e.target.value})}
                  rows={6}
                />
                <Input
                  type="datetime-local"
                  placeholder="Publish Date"
                  value={blogForm.published_at}
                  onChange={(e) => setBlogForm({...blogForm, published_at: e.target.value})}
                />
                <Button type="submit">Add Blog Post</Button>
              </form>
            </CardContent>
          </Card>

          {/* Blog Posts List */}
          <Card>
            <CardHeader>
              <CardTitle>Existing Blog Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {blogPosts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between p-4 border rounded">
                    <div>
                      <h3 className="font-semibold">{post.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {new Date(post.published_at).toLocaleDateString()}
                      </p>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteBlogPost(post.id)}
                    >
                      Delete
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;