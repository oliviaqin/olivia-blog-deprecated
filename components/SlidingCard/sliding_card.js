import React, { useState } from "react";

const BlogPost = ({ title, content, onClick }) => (
  <div className="blog-post" onClick={onClick}>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      id: 1,
      title: "React Basics",
      content: "Learn the basics of React and how to create components.",
    },
    {
      id: 2,
      title: "State and Props",
      content:
        "Understand the concepts of state and props in React applications.",
    },
    {
      id: 3,
      title: "React Hooks",
      content:
        "Explore the power of React Hooks for functional component state management.",
    },
  ];

  const handlePostClick = (postId) => {
    const post = posts.find((p) => p.id === postId);
    setSelectedPost(post);
  };

  return (
    <div className="blog-page">
      <div className="post-list">
        {posts.map((post) => (
          <BlogPost
            key={post.id}
            title={post.title}
            content={post.content}
            onClick={() => handlePostClick(post.id)}
          />
        ))}
      </div>
      <div className="selected-post">
        {selectedPost && (
          <div>
            <h2>{selectedPost.title}</h2>
            <p>{selectedPost.content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
