import React from 'react';

const BlogDetail = ({ blog, onBack }) => (
  <div className="blog-detail">
    <button onClick={onBack}>&larr; Back</button>
    <img src={blog.thumbnail} alt={blog.title} className="thumbnail" />
    <h1>{blog.title}</h1>
    <p>{blog.content}</p>
    <p><strong>Category:</strong> {blog.category}</p>
    <p><strong>Tags:</strong> {blog.tags.join(', ')}</p>
  </div>
);

export default BlogDetail;
