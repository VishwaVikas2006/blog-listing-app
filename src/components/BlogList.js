import React from 'react';
import BlogItem from './BlogItem';

const BlogList = ({ blogs, onSelect, searchTerm }) => {
  // Filter for search & categories (if implementing bonus)
  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.tags.join(' ').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="blog-list">
      {filteredBlogs.length === 0 && <p>No blogs found.</p>}
      {filteredBlogs.map(blog => (
        <BlogItem key={blog.id} blog={blog} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default BlogList;
