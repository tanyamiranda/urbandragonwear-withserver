import React from 'react';
import {connect} from 'react-redux';
import './checkout-item.styles.scss';

import {addItem,clearItem, removeItem} from '../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem, addItem, clearItem, removeItem}) => {

    const {name, imageUrl, price, quantity} = cartItem;

    return (

        <div className="checkout-item">
            <div className="image-container"><img alt={name} src={imageUrl} /></div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>

    );
}

// This maps the addToCart() reducer call to be used in the app.
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});


export default connect(null, mapDispatchToProps) (CheckoutItem);