import React, { useState } from 'react';
import './NewsletterPopup.css'; // Add your CSS styles here

function NewsletterPopup() {
    const [showPopup, setShowPopup] = useState(true);

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return showPopup ? (
        <div className="newsletter-popup">
            <div className="popup-content">
                <span className="close-button" onClick={handleClosePopup}>
                    &times;
                </span>
                <h2>Subscribe to Our Newsletter</h2>
                <p>Get the latest updates and news delivered to your inbox.</p>
                <form>
                  <input type="email" placeholder="Your email" />
                  <br></br>
                </form>
                <button className="subscribe-button">Subscribe</button>
            </div>
        </div>
    ) : null;
}

export default NewsletterPopup;
