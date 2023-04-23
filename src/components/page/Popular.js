import React from 'react';
import * as ig from '../images/img';
import { StarRating } from './StarRating';

function Popular() {
  return (
    <>
      <section className="popular" id="popular">
        <h1 className="heading">most <span>popular</span></h1>
        <div className="box-container">
          <div className="box">
            <span className="price">$5 - $20 </span>
            <img src={ig.p1} alt="Tasty burger"/>
            <h3>Tasty burger</h3>
            <StarRating />
            <a href="#btn" className="btn" title="Order now">Order now</a> 
          </div>
          
          <div className="box">
            <span className="price">$5 - $20 </span>
            <img src={ig.p2} alt="Tasty cakes"/>
            <h3>Tasty cakes</h3>
            <StarRating />
            <a href="#btn" className="btn" title="Order now">Order now</a> 
          </div>
          
          <div className="box">
            <span className="price">$5 - $20 </span>
            <img src={ig.p3} alt="Tasty sweets"/>
            <h3>Tasty sweets</h3>
            <StarRating />
            <a href="#btn" className="btn" title="Order now">Order now</a> 
          </div>
          
          <div className="box">
            <span className="price">$5 - $20 </span>
            <img src={ig.p4} alt="Tasty cup-cakes"/>
            <h3>Tasty cup-cakes</h3>
            <StarRating />
            <a href="#btn" className="btn" title="Order now">Order now</a> 
          </div>
          
          <div className="box">
            <span className="price">$5 - $20 </span>
            <img src={ig.p5} alt="Cold drinks"/>
            <h3>Cold drinks</h3>
            <StarRating />
            <a href="#btn" className="btn" title="Order now">Order now</a> 
          </div>
          
          <div className="box">
            <span className="price">$5 - $20 </span>
            <img src={ig.p6} alt="Cold ice-cream"/>
            <h3>Cold ice-cream</h3>
            <StarRating />
            <a href="#btn" className="btn" title="Order now">Order now</a> 
          </div>
        </div> 
      </section>
      <section className="steps">
        <div className="box">
          <img src={ig.step1} alt="Choose your favorite food"/>
          <h3>Choose your favorite food</h3>
        </div>
        <div className="box">
            <img src={ig.step2} alt=""/>
            <h3>free and fast delivery</h3>
        </div>
        <div className="box">
            <img src={ig.step3} alt=""/>
            <h3>easy payments method</h3>
        </div>
        <div className="box">
            <img src={ig.step4} alt=""/>
            <h3>and finally, enjoy your food</h3>
        </div>
        
        </section>
        </>
    )
};

export default Popular;