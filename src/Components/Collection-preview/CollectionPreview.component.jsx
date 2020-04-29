import React from 'react';
import CollectionItem from "../Collection-Item/CollectionItem.component";
import "./CollectionPreview.styles.scss";


import { withRouter, Link } from 'react-router-dom';

const CollectionPreview = ({ title, items,match}) => (
    <div className="collection-preview">
        <Link to={`${match.url}/${title.toLowerCase()}`} className="link">
            <h1 title={`go to ${title} collection page`} className="title" >{title.toUpperCase()}</h1>
        </Link>
        <div className="preview">
            {
                items
                    .filter((item, idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} title={title} />
                    ))
            }
        </div>

    </div>
);



export default withRouter(CollectionPreview);