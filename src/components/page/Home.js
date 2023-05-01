import React from 'react';
import { homeImg } from '../images/img.js';
import Speciality from './Speciality.js';
import Popular from './Popular.js';
import Gallary from './Gallary.js';
import Review from './Review.js';

function Home() {
    return (
        <>  
            
            <section className="home" id="home">
                <div className="content">
                    <h3> food made with love  </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores deserunt voluptate adipisci impedit, deleniti ipsa culpa explicabo ea, temporibus fugiat. Accusamus debitis adipisci saepe perferendis consequuntur laboriosam ab nam veniam quis qui aliquam vitae, animi dolorum iste repellat eveniet dolore ex doloremque velit incidunt assumenda quam error minima Vitae.
                    </p>
                    <a href="#btn" className="btn">order now</a>
                </div>
                
                <div className="image">
                    <img src={homeImg} alt="img" />
                </div>
            </section>
            <Speciality />
            <Popular />
            <Gallary />
            <Review />
        </>
    )
};

export default Home;
