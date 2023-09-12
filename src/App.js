import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Announcements from './components/Announcements';
import AboutUs from './components/AboutUs';
import Academics from './components/Academics';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import NewsletterPopup from './components/NewsletterPopup'; // Import the NewsletterPopup component

function App() {
    const [showPopup, setShowPopup] = useState(true); // State to control the visibility of the popup

    return (
        <div className="App">
            <Header />
            <Home />
            <Announcements />
            <AboutUs />
            <Academics />
            <Gallery />
            <ContactUs />
            
            {/* Footer */}
            
            {/* Render the NewsletterPopup component based on the showPopup state */}
            {showPopup && <NewsletterPopup />}
        </div>
    );
}

export default App;
