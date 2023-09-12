import React from 'react';
import './ContactUs.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

function ContactUs() {
    const handleButtonHover = (event) => {
        event.target.style.backgroundColor = '#0056b3';
    };

    const handleButtonLeave = (event) => {
        event.target.style.backgroundColor = '#007BFF';
    };

    /*const MapComponent = withScriptjs(
        withGoogleMap(() => (
          <GoogleMap
            defaultZoom={15}
            defaultCenter={{ lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }} // Replace with your desired coordinates
          >
            <Marker position={{ lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }} /> // Replace with your desired marker location
          </GoogleMap>
        ))
    );
*/
    return (
        <section id="contact">
            <h2>Contact Us</h2>
            <div className="contact-info">
                <h4>Phone 1:</h4><p>+91 44 27417000</p>
                <h4>Phone 2:</h4><p>+91 44 27417777</p>
                <h4>Phone 3:</h4><p>+080 69087000</p>
                <h4>Email-ID</h4><p>infodesk@srmist.edu.in</p>
            </div>
            
            <textarea className="contact-form" rows="4" cols="50" placeholder="Enter your message here"></textarea>
            <br></br>
            <button className="contact-form-button" onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave}>
                Submit
            </button>

        </section>
    );
}

export default ContactUs;
