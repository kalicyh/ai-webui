import React from 'react';

interface CardProps {
  title: string;
  content: string;
  image_url: string;
  category: string;
  timestamp: string;
  author: string;
  url: string;
}

const Card: React.FC<CardProps> = ({ title, content, image_url, category, timestamp, author, url }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 px-2 py-4">
      <div className="card bg-base-100 w-96 shadow-xl">
        <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              className="max-h-full max-w-full object-contain"
              src={image_url}
              alt={title}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {title}
              <div className="badge badge-warning">NEW</div>
            </h2>
            <p>{content}</p>
            <div className="flex justify-between">
              <div className="card-actions justify-start">
                <div className="badge badge-outline">{new Date(timestamp).toLocaleDateString()}</div>
              </div>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{author}</div>
                <div className="badge badge-outline">{category}</div>
              </div>
            </div>
          </div>
        </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
