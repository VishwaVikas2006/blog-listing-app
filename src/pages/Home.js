import React, { useState } from 'react';
import blogsData from '../assets/blogs.json';
import BlogList from '../components/BlogList';
import BlogDetail from '../components/BlogDetail';
import SearchBar from '../components/SearchBar';
import '../styles/styles.css';

function Home() {
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Find selected blog by ID
  const selectedBlog = blogsData.find(blog => blog.id === selectedBlogId);

  return (
    <div className="container">
      <h1>Blog Listing Page</h1>
      {!selectedBlog ? (
        <>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <BlogList blogs={blogsData} onSelect={setSelectedBlogId} searchTerm={searchTerm} />
        </>
      ) : (
        <BlogDetail blog={selectedBlog} onBack={() => setSelectedBlogId(null)} />
      )}
    </div>
  );
}

export default Home;
