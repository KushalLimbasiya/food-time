import React from 'react';
import * as ig from '../images/img.js';

const Gallary = () => {
    return (
        <section className='gallery' id='gallery'>
            <h1 class="heading"> our food <span>gallery</span></h1>
        
                <div class="box-container">
                    
                    <div class="box">
                        <img src={ig.g1} alt=""/>
                        <div class="content">
                            <h3>testy food</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, saepe!</p>
                            <a href="#" class="btn">order now</a>
                        </div>
                    </div>
                    <div class="box">
                        <img src={ig.g2} alt=""/>
                        <div class="content">
                            <h3>testy food</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, saepe!</p>
                            <a href="#" class="btn">order now</a>
                        </div>
                    </div><div class="box">
                        <img src={ig.g3} alt=""/>
                        <div class="content">
                            <h3>testy food</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, saepe!</p>
                            <a href="#" class="btn">order now</a>
                        </div>
                    </div>
                    <div class="box">
                        <img src={ig.g4} alt=""/>
                        <div class="content">
                            <h3>testy food</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, saepe!</p>
                            <a href="#" class="btn">order now</a>
                        </div>
                    </div><div class="box">
                        <img src={ig.g5} alt=""/>
                        <div class="content">
                            <h3>testy food</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, saepe!</p>
                            <a href="#" class="btn">order now</a>
                        </div>
                    </div>
                    <div class="box">
                        <img src={ig.g6} alt=""/>
                        <div class="content">
                            <h3>testy food</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, saepe!</p>
                            <a href="#" class="btn">order now</a>
                        </div>
                    </div>
                    <div class="box">
                        <img src={ig.g7} alt=""/>
                        <div class="content">
                            <h3>testy food</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, saepe!</p>
                            <a href="#" class="btn">order now</a>
                        </div>
                    </div>
                    <div class="box">
                        <img src={ig.g8} alt=""/>
                        <div class="content">
                            <h3>testy food</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, saepe!</p>
                            <a href="#" class="btn">order now</a>
                        </div>
                    </div>
                    <div class="box">
                        <img src={ig.g9} alt=""/>
                        <div class="content">
                            <h3>testy food</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, saepe!</p>
                            <a href="#" class="btn">order now</a>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Gallary;