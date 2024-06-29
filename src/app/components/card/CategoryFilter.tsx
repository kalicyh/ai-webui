import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryClick: (category: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategory, onCategoryClick }) => {
  return (
    <>
    <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Explore Websites</h1>
            <div className="flex items-center gap-4">
            <button
        className={`btn btn-sm btn-neutral ${selectedCategory === null ? 'btn-active' : ''}`}
        onClick={() => onCategoryClick(null)}
      >
        All
      </button>
      {categories.map((category, index) => (
        <button
          key={index}
          className={`btn btn-sm btn-neutral ${selectedCategory === category ? 'btn-active' : ''}`}
          onClick={() => onCategoryClick(category)}
        >
          {category}
        </button>
      ))}
            </div>
          </div>
    </>
  );
};

export default CategoryFilter;
