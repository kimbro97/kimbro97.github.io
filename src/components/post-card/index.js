import { Link } from 'gatsby';
import React from 'react';
import './style.scss';

function PostCard({ post }) {
  const { id, slug, title, excerpt, date, categories } = post;
  const twoTitle = title.split(',')
  console.log('Arr',twoTitle)
  return (
    <div className="post-card-wrapper">
      <Link className="post-card" key={id} to={slug}>
        <img height={400} src={twoTitle[1]} alt='public'></img>
        <div className="title">{twoTitle[0]}</div>
        <p className="description" dangerouslySetInnerHTML={{ __html: excerpt }} />
        <div className="info">
          <div className="date">{date}</div>
          <div className="categories">
            {categories.map((category) => (
              <div className="category" key={category}>
                {category}
              </div>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PostCard;
