import { createSelector} from 'reselect';

const COLLECTION_ID_MAP = {
    jordan: 'jordan',
    luxurius: 'luxurius',
    nike: 'nike',
    adidas: 'adidas'
}

const selectShop = state => state.shop;

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCategory = categoryUrlParam => 
    createSelector(
        [selectShopItems],
        collections => collections.find(collection => collection.slug === COLLECTION_ID_MAP[categoryUrlParam] )
    )