import React from 'react';
import {Route} from 'react-router-dom';

import './shop.styles.scss';

import CollectionsOverview from '../collections/collections-overview.component';
import CollectionFullView from '../collections/collection.component';

const ShopPage = ({match}) => (
    
    <div className="shop-page">
        <Route exact path ={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}:collectionId`} component={CollectionFullView} />
    </div>
)
    
export default ShopPage; 
