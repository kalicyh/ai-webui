import React, { useEffect, useState } from 'react';
import Card from './Card';

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

interface CardContainerProps {
  posts: Post[];
  selectedCategory: string | null;
}

const CardContainer: React.FC<CardContainerProps> = ({ posts, selectedCategory }) => {
  const [showCards, setShowCards] = useState<boolean[]>([]);
  
  useEffect(() => {
    setShowCards(posts.map(() => false));
  }, [posts]);

  useEffect(() => {
    const loadImageAndShowCard = async (post: Post, index: number) => {
      try {
        const img = await loadImage(post.image_url);
        setShowCards(prevState => {
          const newState = [...prevState];
          newState[index] = true;
          return newState;
        });
      } catch (error) {
        console.error(`Error loading image for post ${post.id}:`, error);
      }
    };

    const loadImage = (url: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = (error) => reject(error);
        img.src = url;
      });
    };

    const checkImageCacheAndShow = async (post: Post, index: number) => {
      const img = new Image();
      img.src = post.image_url;
      if (img.complete) {
        setShowCards(prevState => {
          const newState = [...prevState];
          newState[index] = true;
          return newState;
        });
      } else {
        await loadImageAndShowCard(post, index);
      }
    };

    const showCardsSequentially = async () => {
      setShowCards(posts.map(() => false));

      const filteredPosts = selectedCategory
        ? posts.filter(post => post.category === selectedCategory)
        : posts;

      for (let i = 0; i < filteredPosts.length; i++) {
        await checkImageCacheAndShow(filteredPosts[i], i);
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    };

    showCardsSequentially();

    return () => {};
  }, [posts, selectedCategory]);

  const filteredPosts = selectedCategory
    ? posts.filter(post => post.category === selectedCategory)
    : posts;

  return (
    <div className="flex flex-wrap justify-center">
      {filteredPosts.map((post, index) => (
        <div key={post.id} className={`transition-opacity duration-500 delay-${index * 100} ${showCards[index] ? 'opacity-100' : 'opacity-0'}`}>
          <Card 
            title={post.title} 
            content={post.content} 
            image_url={post.image_url}
            category={post.category}
            timestamp={post.timestamp}
            author={post.author}
            url={post.url}
          />
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
