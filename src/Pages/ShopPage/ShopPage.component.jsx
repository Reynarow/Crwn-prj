import React , {useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';





import CollectionPageContainer from '../../Pages/Collection/CollectionPage.container';
import CollectinOverviewContainer from '../../Components/Collection-overview/Collection-overview.container';
import CollectionItemDetailsContainer from '../../Components/CollectionItemDetails/CollectionItemDetails.container';

import { fetchCollectionsStart } from '../../Redux/shop/shop.action'
import "./ShopPage.styles.scss";
import { connect } from 'react-redux';





const ShopPage = ({ fetchCollectionsStart , match }) => {

       useEffect(()=>{
               fetchCollectionsStart()
       }, [fetchCollectionsStart])

                return (
                        <div>
                                <Switch>
                                        <Route exact path={`${match.path}`} component={CollectinOverviewContainer} />
                                        <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
                                        <Route path={`${match.path}/:collectionId/:id`} component={CollectionItemDetailsContainer} />
                                </Switch>
                        </div>

                )
        }





const mapDispatchToProps = dispatch => ({
        fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);