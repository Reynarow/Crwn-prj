import React from 'react';
import CollectionItem from "../Collection-Item/CollectionItem.component";
import "./CollectionPreview.styles.scss";


import {withRouter} from 'react-router-dom';

const CollectionPreview = ({ title, items,history,match }) => (
    <div className="collection-preview">
        <h1 className="title" onClick ={() =>history.push(`${match.url}/${title.toLowerCase()}`)}>{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                    .filter((item, idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item}title={title} />
                    ))
            }
        </div>

    </div>
);



export default withRouter(CollectionPreview);