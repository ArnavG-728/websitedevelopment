import React from 'react';
import './Gallery.css';

function Gallery() {
    return (
        <section id="gallery">
            <h2>Gallery</h2>
            <div className="media">
                <br></br>
            </div>
            <div className='embedded-video'>
                <h3>Aarush</h3>
                <br></br>
                <div className='media-item img'>
                    <img src='https://qph.cf2.quoracdn.net/main-qimg-620df6cf885729586c7b5b86a2bf7377-lq' alt='aarush'/>
                </div>
                <br></br>
                <iframe width={560} height={315} src='https://www.youtube.com/embed?v=sRo2dPV2YKU' frameborder="0" allowfullscreen></iframe>
            </div>
            <br></br>
            <br></br>
            <div className='embedded-video'>
                <h3>Milan</h3>
                <br></br>
                <div className='media-item img'>
                    <img src='https://i.ytimg.com/vi/kSVGb_4nHQo/maxresdefault.jpg' alt='milan'/>
                </div>
                <br></br>
                <iframe width={560} height={315} src='https://www.youtube.com/embed?v=7qjZH3h1vKw' frameborder="0" allowfullscreen></iframe>
            </div>
        </section>
    );
}

export default Gallery;
