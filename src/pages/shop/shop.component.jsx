import React from "react";
import { Route } from 'react-router-dom';
import axios from 'axios';

import CollectionOverView from "../../components/collections-overview/collections-overview.component";
import CategoryPage from '../../pages/category/category.component';

class Shop extends React.Component { 
  state = {
    jsonData: null,
  };

  componentDidMount() {
    axios
      .get(
        "https://sneakers-api-backend.herokuapp.com/"
      )
      .then(result => console.log({ jsonData: result.data }))
      .catch(error => console.log(error));
    }
    render(){
      const { match } = this.props;
      return(
        <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverView} />
      <Route path={`${match.path}/:collectionId`} component={CategoryPage} />
    </div>
      )
    }

}

export default Shop;
