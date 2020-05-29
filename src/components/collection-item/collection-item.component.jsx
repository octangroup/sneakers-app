import React from 'react';

import './collection-item.styles.scss';

const priceSplitter = (number) =>'$' + (Math.round(number/ 100).toFixed(2));

const CollectionItem = ({id,name,retail_price_cents,main_picture_url}) => (
    <div className='collection-item'>
        <div
            className='image'
            style={{backgroundImage:`url(${main_picture_url})`
        }}
       />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{priceSplitter(retail_price_cents)}</span>
        </div> 
    </div>
)

export default CollectionItem;