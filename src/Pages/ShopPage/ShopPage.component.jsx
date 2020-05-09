import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';





import { fetchCollectionsStart } from '../../Redux/shop/shop.action'
import "./ShopPage.styles.scss";
import { connect } from 'react-redux';
import Spinner from '../../Components/Spinner/Spinner.component';

const CollectionPageContainer = lazy(() =>(import('../../Pages/Collection/CollectionPage.container')));
const CollectinOverviewContainer = lazy(() => (import('../../Components/Collection-overview/Collection-overview.container')));
const CollectionItemDetailsContainer = lazy(() =>(import('../../Components/CollectionItemDetails/CollectionItemDetails.container')));



const ShopPage = ({ fetchCollectionsStart, match }) => {

        useEffect(() => {
                fetchCollectionsStart()
        }, [fetchCollectionsStart])

        return (
                <div>
                        <Switch>
                                <Suspense fallback={<Spinner/>}>
                                        <Route exact path={`${match.path}`} component={CollectinOverviewContainer} />
                                        <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
                                        <Route path={`${match.path}/:collectionId/:id`} component={CollectionItemDetailsContainer} />
                                </Suspense>
                        </Switch>
                </div>

        )
}





const mapDispatchToProps = dispatch => ({
        fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);