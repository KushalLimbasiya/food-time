import React from 'react';
import {oderImg} from '../images/img';

const Order = () => {
    return (
        <section className='order' id='order'>
                <h1 class="heading"><span>order</span> now </h1>
        
                <div class="row">
                <div class="image">
                    <img src={oderImg} alt=""/>    
                </div>
                <form action="">
                    
                    <div class="inputBox">
                        <input type="text" placeholder="name"/>
                        <input type="email" placeholder="email"/>

                    </div>

                    <div class="inputBox">
                        <input type="number" placeholder="number"/>
                        <input type="text" placeholder="food name"/>
                    </div>

                    <textarea placeholder="address" name="" id="" cols="30" rows="10"/>

                    <input type="submit" value="order now" class="btn"/>
                </form>
            </div>
        
        </section>
    )
}

export default Order;