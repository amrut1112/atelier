-- Insert sample products
INSERT INTO public.products (name, description, image_url, category, price, featured) VALUES
('Folding Door', 'Space-saving folding door solution for modern interiors', '/assets/folding door.jpg', 'doors', 25000.00, true),
('Sliding Door', 'Smooth sliding door mechanism for contemporary designs', '/assets/sliding door.jpg', 'doors', 30000.00, true),
('Openable Door', 'Traditional openable door with premium finish', '/assets/openable door.jpg', 'doors', 20000.00, true),
('Ghost Door', 'Invisible door design that blends seamlessly with walls', '/assets/ghost door.jpg', 'doors', 35000.00, true),
('Fixed Partition', 'Custom fixed partition for space division', '/assets/fix partition.jpg', 'partitions', 15000.00, true);

-- Insert sample blog posts
INSERT INTO public.blog_posts (title, excerpt, content, published_at) VALUES
('15 Interior Design Tips to Know Before You Start...', 'Designing a home is one of those experiences that stays with you. This experience is exciting, sometimes...', 'Full content about interior design tips...', '2025-12-26 00:00:00+00'),
('Space Saving Wardrobe Design Hacks for Small...', 'Modern urban homes have changed the way wardrobes are designed and experienced. No longer limited to...', 'Full content about wardrobe design hacks...', '2025-12-24 00:00:00+00'),
('Create a Stylish Space with These Wardrobe Colour...', 'Every colour says something about you – calm, bold, elegant, or adventurous. Your bedroom deserves...', 'Full content about wardrobe colors...', '2025-10-18 00:00:00+00');