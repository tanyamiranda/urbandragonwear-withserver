import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import './checkout.styles.scss';

import {selectCartItems, selectCartTotalCost} from '../../redux/cart/cart.selectors';
import CheckOutItem from '../../components/checkout-item/checkout-item.component';

const CheckOutPage = ({cartItems, cartTotalCost}) => (

    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">Product</div>
            <div className="header-block">Description</div>
            <div className="header-block">Quantity</div>
            <div className="header-block">Price</div>
            <div className="header-block">Remove</div>
        </div>
        
        {
            cartItems.length ?
                cartItems.map(cartItem => (
                    <CheckOutItem key={cartItem.id} cartItem={cartItem} />
                ))
            :
                <span className="empty-message">Your cart is empty.</span>
        }

        <div className="total">
            <span>Total: ${cartTotalCost}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    cartTotalCost: selectCartTotalCost
});

export default withRouter(connect(mapStateToProps)(CheckOutPage));