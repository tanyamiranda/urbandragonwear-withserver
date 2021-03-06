import React from 'react';

import './collection-item.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

import {connect} from 'react-redux';

import {addItem} from '../../redux/cart/cart.actions'

const CollectionItem = ({item, addItem}) => {
    
    const {name, price, imageUrl} = item; 

    return (
        <div className="collection-item">
            {/* Created separate div to control hover zoom action without affecting content zoom*/}
            <div className="image" 
                style={{
                    backgroundImage: `url( ${imageUrl})` 
                }}
            />
            
            <div className="collection-footer">
                <div className="name">{name}</div>
                <div className="price">${price}</div>            
            </div>  
            
            <CustomButton onClick={() => addItem(item)}>ADD TO CART</CustomButton>
        </div>
    );
}


  
// This maps the addToCart() reducer call to be used in the app.
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});


export default connect(null,mapDispatchToProps) (CollectionItem);