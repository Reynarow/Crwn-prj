import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CollectionItemDetails from '../../Components/CollectionItemDetails/CollectionItemDetails.component'


import CollectionPageContainer from '../../Pages/Collection/CollectionPage.container';
import CollectinOverviewContainer from '../../Components/Collection-overview/Collection-overview.container';
import CollectionItemDetailsContainer from '../../Components/CollectionItemDetails/CollectionItemDetails.container';

import { fetchCollectionStartAsync } from '../../Redux/shop/shop.action'
import "./ShopPage.styles.scss";
import { connect } from 'react-redux';

import WithSpinner from '../../Components/with-spinner/WithSpinner.component'


const CollectionItemDetailsWithSpinner = WithSpinner(CollectionItemDetails);

class ShopPage extends React.Component {

        componentDidMount() {

                const { fetchCollectionStartAsync } = this.props;
                fetchCollectionStartAsync();
        }
        render() {
                const { isCollectionLoaded, match } = this.props;

                return (
                        <div>
                                <Route exact path={`${match.path}`} component={CollectinOverviewContainer} />
                                <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
                                <Route path={`${match.path}/:collectionId/:id`} component={CollectionItemDetailsContainer} />
                        </div>

                )
        }

}




const mapDispatchToProps = dispatch => ({
        fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);