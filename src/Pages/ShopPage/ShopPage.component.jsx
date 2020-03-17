import React from 'react';
import { Route } from 'react-router-dom';

import CollectinOverview from '../../Components/Collection-overview/Collection-overview.component';
import CollectionPage from '../Collection/CollectionPage.component';
import  CollectionItemDetails from '../../Components/CollectionItemDetails/CollectionItemDetails.component'
import { firestore, convertCollectiosSnapshotToMap } from '../../Components/firebase/firebase-utils';

import { updateCollections } from "../../Redux/shop/shop.action";
import "./ShopPage.styles.scss";
import { connect } from 'react-redux';

import WithSpinner from '../../Components/with-spinner/WithSpinner.component'

const CollectinOverviewWithSpinner = WithSpinner(CollectinOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
        state={
                loading:true
        }



        unSubscribFromSnapShot = null
        componentDidMount() {
                const { updateCollections } = this.props;
                const collectionRef = firestore.collection('collections');
                this.unSubscribFromSnapShot = collectionRef.onSnapshot(async snapShot => {
                        const collectionMap =   convertCollectiosSnapshotToMap(snapShot);
                        updateCollections(collectionMap)
                        this.setState({loading:false})
                      
                })
        }
        render() {
                const { match } = this.props
                const{loading} =this.state;
                return (
                        <div>
                                <Route exact path={`${match.path}`} render={(props)=>
                                         <CollectinOverviewWithSpinner isLoading={loading} {...props} /> } />
                                <Route exact path={`${match.path}/:collectionId`} 
                                render={(props)=> <CollectionPageWithSpinner isLoading={loading} {...props}  /> }/>
                                <Route path={`${match.path}/:collectionId/:id`} component={CollectionItemDetails} />
                        </div>

                )
        }

}


const mapDispatchToProps = dispatch => ({
        updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);