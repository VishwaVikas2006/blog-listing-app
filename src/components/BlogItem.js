import React from 'react';

const BlogItem = ({ blog, onSelect }) => (
  <div className="blog-item">
<img
  src={process.env.PUBLIC_URL + '/' + blog.thumbnail}
  alt={blog.title}
  className="thumbnail"
/>


    <div className="blog-info">
      <h2>{blog.title}</h2>
      <p>{blog.description}</p>
      <p><strong>Category:</strong> {blog.category}</p>
      <p><strong>Tags:</strong> {blog.tags.join(', ')}</p>
      <button onClick={() => onSelect(blog.id)}>Read More</button>
    </div>
  </div>
);

export default BlogItem;
