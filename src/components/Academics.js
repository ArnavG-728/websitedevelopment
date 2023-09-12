import React from 'react';
import './Academics.css';

function Academics() {
    return (
        <section id="academics">
            <h2>Academics</h2>
            <br></br>
            <div className="timetable">
                <h3>Timetable:</h3>
                <table>
                    <tr>
                        <th>Time</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                    </tr>
                    <tr>
                        <th>8:00 - 8:50</th>
                        <th>Advanced Programming Practices</th>
                        <th>DSA</th>
                        <th>Maths</th>
                        <th> - </th>
                        <th>Operating System</th>
                    </tr>
                    <tr>
                        <th>8:50 - 9:40</th>
                        <th> - </th>
                        <th>DSA</th>
                        <th>Operating System</th>
                        <th>Maths</th>
                        <th>Advanced Programming Practices</th>
                    </tr>
                </table>
            </div>
            <div className="resources">
                <h3>Downloadable Resources:</h3>
                <ul>
                    <li><a href='https://www.cs.bham.ac.uk/~jxb/DSA/dsa.pdf' target="_blank">DSA Notes</a></li>
                    <li><a href='https://www.cl.cam.ac.uk/teaching/1011/OpSystems/os1a-slides.pdf' target="_blank">Operating System Notes</a></li>
                </ul>
            </div>
        </section>
    );
}

export default Academics;
