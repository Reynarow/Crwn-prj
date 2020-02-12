import React from 'react';
import SHOP_DATA from './Shop.Data.js';

import CollectionPreview from "../../Components/Collection-preview/CollectionPreview.component";

import "./ShopPage.styles.scss";


class ShopPage extends React.Component{
    constructor(props){
        super(props)

        this.state={
            collections: SHOP_DATA
        };
    }

    render(){
        const {collections}=this.state;
        return(<div className="shop-page">
         {
            collections.map(({id , ...otherCollectionProps}) =>(
                <CollectionPreview key={id} {...otherCollectionProps} />)
                )
         }</div>
        );
    }


}



export default ShopPage;