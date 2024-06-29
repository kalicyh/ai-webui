import React, { useEffect, useState } from 'react';
import CategoryFilter from '@/components/cards/CategoryFilter';
import CardContainer from '@/components/cards/CardContainer';

interface Post {
  id: number;
  title: string;
  content: string;
  image_url: string;
  category: string;
  timestamp: string;
  author: string;
  url: string;
}

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getpost`);
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const uniqueCategories = Array.from(new Set(posts.map(post => post.category)));

  return (
    <div className="container mx-auto">
      <CategoryFilter 
        categories={uniqueCategories} 
        selectedCategory={selectedCategory} 
        onCategoryClick={setSelectedCategory} 
      />
      <CardContainer 
        posts={posts} 
        selectedCategory={selectedCategory} 
      />
    </div>
  );
};

export default App;
