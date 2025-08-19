import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // If using React Router v6+
import blogsData from '../assets/blogs.json';
import BlogDetail from '../components/BlogDetail';
import '../styles/styles.css';

function Blog() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the blog by its id (convert id to number)
  const blog = blogsData.find(b => String(b.id) === id);

  if (!blog) {
    return (
      <div className="container">
        <h2>Blog Not Found</h2>
        <button onClick={() => navigate(-1)}>&larr; Back</button>
      </div>
    );
  }

  return (
    <div className="container">
      <BlogDetail blog={blog} onBack={() => navigate(-1)} />
    </div>
  );
}

export default Blog;
