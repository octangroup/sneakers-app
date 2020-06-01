import React from 'react';
import './checkout-item.styles.scss';

const CheckoutItem = ({
  cartItem: { name, retail_price_cents, main_picture_url, quantity },
}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={main_picture_url} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{retail_price_cents}</span>
    <div className="remove-button">&#10005;</div>
  </div>
);

export default CheckoutItem;