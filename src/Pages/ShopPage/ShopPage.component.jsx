import React from 'react';
import { Route } from 'react-router-dom';

import CollectinOverview from '../../Components/Collection-overview/Collection-overview.component';
import CollectionPage from '../Collection/CollectionPage.component';

import "./ShopPage.styles.scss";



const ShopPage = ({ match }) => {
        return (
                <div>
                        <Route exact path={`${match.path}`} component={CollectinOverview} />
                        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
                </div>
        )
}




export default ShopPage;