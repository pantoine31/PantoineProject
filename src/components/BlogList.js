import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ posts }) => {
  return (
    <div className="container mt-5 pt-5">
      <h1 className="text-center mb-4">Τα άρθρα μου</h1>
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-4 mb-4">
            <div className="card shadow-sm border-0 rounded-3">
              {/* Εικόνα μόνο στην προβολή της λίστας */}
              <img src={post.image} className="card-img-top" alt={post.title} />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.excerpt}</p>
                <Link to={`/post/${post.id}`} className="btn btn-primary">
                  Διαβάστε Περισσότερα
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
