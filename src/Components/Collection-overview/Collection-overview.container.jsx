import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import {selectIsCollectionFetching} from '../../Redux/shop/shop.selector';
import WithSpinner from '../with-spinner/WithSpinner.component';
import CollectionsOverview from './Collection-overview.component';



const mapStateToProps = () => createStructuredSelector({
    isLoading:selectIsCollectionFetching,
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
) (CollectionsOverview);



export default CollectionsOverviewContainer;