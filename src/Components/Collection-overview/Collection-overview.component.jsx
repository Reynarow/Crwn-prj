import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectShopCollectionsArray } from '../../Redux/shop/shop.selector'

import CollectionPreview from "../../Components/Collection-preview/CollectionPreview.component";
import './Collection-overview.styles.scss';




const CollectionOverview = ({ collections }) => {
 
    return(

    <div className="collection-overview">
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />)
            )
        }</div>
)}


const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionsArray
})



export default connect(mapStateToProps)(CollectionOverview);