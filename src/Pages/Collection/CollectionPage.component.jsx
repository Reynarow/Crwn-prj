import React from 'react';

import CollectionItem from '../../Components/Collection-Item/CollectionItem.component';
import { connect } from 'react-redux';

import { selectCollection } from '../../Redux/shop/shop.selector'

import './CollectionPage.styles.scss';



const CollectionPage = ({ collection}) => {
    console.log (collection)
    const {items , title} = collection
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem item={item} id={item.id} />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);