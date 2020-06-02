import { createSelector} from 'reselect';

const COLLECTION_ID_MAP = {
    jordan: 1,
    luxurius: 2,
    nike: 3,
    adidas: 4
}

const selectShop = state => state.shop;

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCategory = categoryUrlParam => 
    createSelector(
        [selectShopItems],
        collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[categoryUrlParam] )
    )