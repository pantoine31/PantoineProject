import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <style>
        {`
            body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            }

          .contact-container {
            background: #6a0dad; /* Απλό μωβ */
            color: #fff;
            padding: 40px;
            border-radius: 12px;
            max-width: 700px;
            margin: auto;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            text-align: center;
            flex: 1;
            margin-top:100px;
            margin-bottom: 100px;
          }

          .contact-header h1 {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .contact-header p {
            font-size: 18px;
            opacity: 0.8;
          }

          .contact-info {
            font-size: 18px;
            margin-top: 20px;
          }

          .contact-item {
            margin: 15px 0;
            padding: 10px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 8px;
          }

          .contact-item h3 {
            font-weight: bold;
            margin-bottom: 5px;
          }

          .contact-item p a {
            color: #ffdd57;
            text-decoration: none;
            font-weight: bold;
          }

          .contact-item p a:hover {
            text-decoration: underline;
          }

          .social-media h3 {
            font-size: 20px;
            margin-bottom: 10px;
          }

          .social-links {
            display: flex;
            justify-content: center;
            gap: 15px;
          }

          .social-link {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.3);
            transition: transform 0.3s ease-in-out, background-color 0.3s;
          }

          .social-link:hover {
            transform: scale(1.2);
          }

          .social-link i {
            font-size: 22px;
          }

          .github { color: #f5f5f5; background-color: #333; }
          .linkedin { color: #fff; background-color: #0077b5; }
          .instagram { color: #fff; background: linear-gradient(135deg, #fdf497, #fd5949, #d6249f, #285AEB); }
          .facebook { color: #fff; background-color: #1877f2; }
          .email { color: #fff; background-color: #ea4335; }

          /* Φόρμα επικοινωνίας */
          .contact-form {
            margin-top: 20px;
            text-align: left;
          }

          .contact-form label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
          }

          .contact-form input,
          .contact-form textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
            border: none;
            font-size: 16px;
          }

          .contact-form textarea {
            height: 120px;
            resize: none;
          }

          .contact-form button {
            background: #ffdd57;
            color: #000;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            transition: background 0.3s ease-in-out;
          }

          .contact-form button:hover {
            background: #e6c200;
          }


        `}
      </style>

      <div className="contact-header">
        <h1>Επικοινωνήστε μαζί μου</h1>
        <p>Στείλτε μου ένα μήνυμα ή βρείτε με στα social media.</p>
      </div>

      <div className="contact-info">
        <div className="contact-item">
          <h3>Κινητό:</h3>
          <p>+30 698 668 0496</p>
        </div>

        <div className="contact-item">
          <h3>Email:</h3>
          <p><a href="mailto:antonhspap@icloud.com">antonhspap@icloud.com</a></p>
        </div>

        <div className="social-media">
          <h3>Social Media:</h3>
          <div className="social-links">
            <a href="https://github.com/pantoine31" target="_blank" rel="noopener noreferrer" className="social-link github">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/antonis-papakonstantinou-5316281b6/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/pantoine_/" target="_blank" rel="noopener noreferrer" className="social-link instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.facebook.com/Papakwnstantinouant/" target="_blank" rel="noopener noreferrer" className="social-link facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="mailto:antonhspap@icloud.com" target="_blank" rel="noopener noreferrer" className="social-link email">
              <i className="bi bi-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Φόρμα Επικοινωνίας */}
      <div className="contact-form">
        <h3>Στείλτε μου ένα μήνυμα</h3>
        <form>
          <label>Όνομα:</label>
          <input type="text" placeholder="Το όνομά σας" required />

          <label>Email:</label>
          <input type="email" placeholder="Το email σας" required />

          <label>Μήνυμα:</label>
          <textarea placeholder="Γράψτε το μήνυμά σας..." required></textarea>

          <button type="submit">Αποστολή</button>
        </form>
      </div>

    </div>
  );
};

export default Contact;
