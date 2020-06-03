import React from 'react';


import './cart-item.styles.scss';

const CartItem = ({ item: { name, retail_price_cents, main_picture_url,quantity } })=>(
    <div className='cart-item'>
        <img src={main_picture_url} alt='item' />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>
                {quantity} x ${retail_price_cents}
            </span>
        </div>
    </div>
);

export default CartItem;