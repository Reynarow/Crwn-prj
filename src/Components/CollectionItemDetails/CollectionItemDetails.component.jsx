import React from 'react';
import { connect } from 'react-redux';

import { selectItem } from '../../Redux/shop/shop.selector';
import {addItems} from '../../Redux/cart/cart.action'

import { Image, ImageContainer, ItemContainer, DetailsContainer,Details } from './CollectionItemDetails.styles'

import CustomButton from '../Custom-button/Custom-button.compnent';

const CollectionItemDetails = ({ collectionItem,addItem }) => {
    console.log(collectionItem)
    const { imageUrl, name, price } = collectionItem;
    return (
        <ItemContainer>
            <DetailsContainer>
                <Details>
                 <h2 className="title">{name} </h2>   
                <span className="price">Price: {price}$</span>
                <CustomButton onClick={()=>addItem(collectionItem)} >Add to Cart</CustomButton>
                </Details>
            </DetailsContainer>
            <ImageContainer>
                <Image imageUrl={imageUrl} />
            </ImageContainer>
        </ItemContainer>

    )
}




const mapStateToProps = (state, ownProps) => ({
    collectionItem: selectItem(
        ownProps.match.params.collectionId, ownProps.match.params.id)(state)
})

const mapDispatchToProps = (dispatch) =>({
    addItem: item => dispatch(addItems(item))
})

export default connect(mapStateToProps,mapDispatchToProps)(CollectionItemDetails);