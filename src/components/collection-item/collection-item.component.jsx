import React from 'react';
import { connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem} from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const priceSplitter = (number) =>'$' + (Math.round(number/ 100).toFixed(2));

const CollectionItem = ({item,addItem}) => {
    const { name,retail_price_cents,main_picture_url} = item;
    return (
      <div className="collection-item">
        <div className="container">
          <div
            className="image"
            style={{ backgroundImage: `url(${main_picture_url})` }}
          />
          <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{priceSplitter(retail_price_cents)}</span>
          </div>
          <CustomButton onClick={() => addItem(item)} inverted>
            {" "}
            ADD TO CART
          </CustomButton>
        </div>
      </div>
    );};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps) (CollectionItem);