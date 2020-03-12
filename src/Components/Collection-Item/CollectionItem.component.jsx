import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../Custom-button/Custom-button.compnent';
import {addItems} from '../../Redux/cart/cart.action';
import "./CollectionItem.styles.scss";


const CollectionItem = ({item,addItems}) => {
    const { imageUrl, name, price } = item;
    return (
        <div className="collection-item">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <CustomButton className="custom-button" onClick={() =>addItems(item)} inverted >add to cart</CustomButton>

        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    addItems: (item) => dispatch(addItems(item))
})

export default connect(null , mapDispatchToProps)(CollectionItem);