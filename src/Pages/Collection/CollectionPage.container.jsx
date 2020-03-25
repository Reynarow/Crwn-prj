import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionLoaded } from '../../Redux/shop/shop.selector';

import WithSpinner from '../../Components/with-spinner/WithSpinner.component';
import CollectionPage from './CollectionPage.component';

const mapStateToProps = createStructuredSelector ({
    isLoading: state => !selectCollectionLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);


export default CollectionPageContainer;