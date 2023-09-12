import React from 'react';
import './AboutUs.css';

function AboutUs() {
    return (
        <section id="about">
            <h2>About Us</h2>
            <div className="leadership-team">
                <h3>SRM In Focus</h3>
                <p>SRM Institute of Science and Technology  is one of the top ranking universities in India with over 52,000 full time students and more than 3200 faculty across all the campuses – Kattankulathur, Ramapuram, Vadapalani Campus – all in and around Chennai, Tiruchirappalli (in TN), Modinagar (in UP) & Sonepat (in Haryana) – both of which are located near Delhi NCR, Amaravati (in AP), Gangtok (in Sikkim) – offering a wide range of undergraduate, postgraduate and doctoral programs in six Faculties – Engineering & Technology, Management, Medicine & Health sciences, Science & Humanities, Law and Agricultural Sciences.</p>
                <br></br>
                <h3>Vision</h3>
                <p>“To emerge as a World – Class University in creating and disseminating knowledge and providing students a unique learning experience in Science, Technology, Medicine, Management and other areas of Scholarship that will best serve the world and for the betterment of mankind”.</p>
            </div>

            <div className='leader img'>
                <div className="leader-column">
                    <img src='https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/02/MR.-RAVI-PACHAMOOTHOO.jpg' alt='Pro-Chancellor(Academics)'/>
                    <figcaption>Pro-Chancellor(Administration)</figcaption>        
                </div>
                <div className="leader-column">
                    <img src='https://www.srmtech.com/wp-content/uploads/2021/06/Sathya-Narayanan-IMG.jpg' alt='Pro-Chancellor(Academics)'/>
                    <figcaption>Pro-Chancellor(Academics)</figcaption>           
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
