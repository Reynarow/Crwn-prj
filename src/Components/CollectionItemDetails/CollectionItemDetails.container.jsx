import {connect} from 'react-redux';
import {compose} from 'redux';

import {createStructuredSelector} from 'reselect';
import { selectCollectionLoaded } from '../../Redux/shop/shop.selector';

import WithSpinner from '../../Components/with-spinner/WithSpinner.component';
import CollectionItemDetails from './CollectionItemDetails.component'



const mapStateToProps = () => createStructuredSelector({
    isLoading: state => !selectCollectionLoaded(state)
})

const CollectionItemDetailsContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionItemDetails)



export default CollectionItemDetailsContainer;