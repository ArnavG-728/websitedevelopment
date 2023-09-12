import React from 'react';
import './Announcements.css';

function Announcements() {
    return (
        <section id="announcements">
            <div className="announcements">
                <h2>Announcements</h2>
                <div className="announcement-card">
                    <h3>Important Event</h3>
                    <p><strong>Date:</strong> September 15, 2023</p>
                    <p>HACKATHON 1.0 To be held in TP Ganeshan Auditorium.</p>
                </div>
                <div className="announcement-card">
                    <h3>Important Notice</h3>
                    <p>Collect Semester -2 Report Cards</p>
                </div>  
                <div className="announcement-card">
                    <h3>Holiday Notice</h3>
                    <p>Holiday on 19th September, 2023 on the occasion of Mr. Gupta's Birthday</p>
                </div>
            </div>
        </section>
    );
}

export default Announcements;
