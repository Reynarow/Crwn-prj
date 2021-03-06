import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../Custom-button/Custom-button.compnent';
import { withRouter, Link } from 'react-router-dom'
import { addItems } from '../../Redux/cart/cart.action';
import "./CollectionItem.styles.scss";


const CollectionItem = ({ item, addItems, match, title }) => {
    const { imageUrl, name, price } = item;
    return (
        <div  className="collection-item">
            
            <Link
             to= {`${match.url}/${title?`${title.toLowerCase()}/`:'' } ${item.id}`}                   
             className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
          
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <CustomButton className="custom-button" onClick={() => addItems(item)} inverted >add to cart</CustomButton>

        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    addItems: (item) => dispatch(addItems(item))
})

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));