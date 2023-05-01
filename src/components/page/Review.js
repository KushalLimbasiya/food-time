import React from 'react';
import * as ig from '../images/img.js';

const Review = () => {
    return (
        <section className='review' id='review'>
             <h1 class="heading"> our customers <span>reviews</span></h1>
             <div className='box-container'>
                <div className='box'>
                    <img src={ig.pic1} alt='/' />
                    <h3>bruce lee</h3>
                    <p>Absolutely delicious! The flavors were perfectly balanced and the presentation was beautiful. Can't wait to order from here again!</p>
                </div>
                <div className='box'>
                    <img src={ig.pic2} alt='/' />
                    <h3>bruce lee</h3>
                    <p>The food arrived hot and fresh, and the portions were very generous. The prices are reasonable and the taste is amazing!</p>
                </div>
                <div className='box'>
                    <img src={ig.pic3} alt='/' />
                    <h3>bruce lee</h3>
                    <p>This food was a game-changer! I had never tasted such amazing flavors before. The customer service was also excellent. Highly recommended!</p>
                </div>
             </div>
        </section>
    )
}

export default Review;