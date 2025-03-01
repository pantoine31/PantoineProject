import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import posts from './posts.json';  // Import the posts.json file

const BlogPost = () => {
  const { id } = useParams(); // Get the id from the URL
  const navigate = useNavigate();
  const post = posts.find((post) => post.id === parseInt(id)); // Find the post with the matching id

  if (!post) {
    return <h2 className="not-found">Άρθρο δεν βρέθηκε</h2>; // Display a not found message if no post matches
  }

  // Ελέγχουμε αν το άρθρο έχει το ID που θέλουμε να προσθέσουμε το βίντεο
  const shouldShowVideo = post.id === 3; // Εδώ βάζεις το ID του άρθρου που θες να έχει το βίντεο, το άρθρο με ID 3
  const shouldShowVideo2 = post.id === 4; // Εδώ βάζεις το ID του άρθρου που θες να έχει το βίντεο, το άρθρο με ID 3



  return (
    <div className="blog-container">
      <div className="post">
        <h1 className="post-title">{post.title}</h1>
        <p className="post-date">{post.date}</p>
        <hr />
        
        {/* Εδώ προσθέτουμε το excerpt */}
        <p className="post-excerpt">{post.excerpt}</p>
        <hr />
        
        {/* Ελέγχουμε αν το content είναι πίνακας ή συμβολοσειρά και το εμφανίζουμε ανάλογα */}
        <div className="post-content">
          {Array.isArray(post.content) ? (
            post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>  // Το .map() το χρησιμοποιούμε για κάθε παράγραφο αν είναι πίνακας
            ))
          ) : (
            <p>{post.content}</p>  // Αν δεν είναι πίνακας, το εμφανίζουμε ως κείμενο
          )}
        </div>
        
        {shouldShowVideo && post.video && post.video.url && (
        <div className="post-video">
          <h3>{post.video.title}</h3>
          {/* Μετατροπή του URL σε σωστή μορφή για το iframe */}
          <iframe
            width="100%"   // Χρησιμοποιούμε 100% για να γεμίσει τον διαθέσιμο χώρο
            height="500"   // Ρυθμίζουμε το ύψος
            src={`https://www.youtube.com/embed/${post.video.url.split('v=')[1]}`}
            title={post.video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}


      {shouldShowVideo2 && post.video && post.video.url && (
        <div className="post-video">
          <h3>{post.video.title}</h3>
          {/* Μετατροπή του URL σε σωστή μορφή για το iframe */}
          <iframe
            width="100%"   // Χρησιμοποιούμε 100% για να γεμίσει τον διαθέσιμο χώρο
            height="500"   // Ρυθμίζουμε το ύψος
            src={`https://www.youtube.com/embed/${post.video.url.split('v=')[1]}`}
            title={post.video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}



        {/* Κουμπί επιστροφής */}
        <button className="back-button" onClick={() => navigate('/')}>
          ← Πίσω στα Άρθρα
        </button>
      </div>
    </div>
  );
};

export default BlogPost;
