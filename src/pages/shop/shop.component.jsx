import React from "react";
import { Route } from 'react-router-dom';

import CollectionOverView from "../../components/collections-overview/collections-overview.component";
import CategoryPage from '../../pages/category/category.component';

const Shop = ({match}) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverView} />
    <Route path={`${match.path}/:collectionId`} component={CategoryPage} />
  </div>
);

export default Shop;
