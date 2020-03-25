import { createSelector } from 'reselect';





const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    selectShop,
    shop => shop.collections
)

export const selectShopCollectionsArray = createSelector(
    selectShopCollections,
    collections => {
        if (collections) {
            let arrayTemp = ['womens', 'mens', 'jackets', 'sneakers', 'hats'];
            return arrayTemp.map(key => collections[key])
        } else {
            return []
        }
    }
)

export const selectCollection = (collectionUrlParams) =>
    createSelector(
        selectShopCollections,
        collections => (collections ? collections[collectionUrlParams] : null)
    )

export const selectItem = (collectionUrlParams, collectionId) =>
    createSelector(
        selectShopCollections,
        collections => collections ? (collections[collectionUrlParams]).items.find(obj => obj.id === parseInt(collectionId)) : null
    )



export const selectIsCollectionFetching = createSelector(
    selectShop,
    shop => shop.isFetching
)


export const selectCollectionLoaded = createSelector(
    selectShop,
    shop => !!shop.collections
)