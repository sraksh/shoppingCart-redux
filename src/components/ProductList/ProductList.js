import React, { Component } from 'react';
import './ProductList.css';
import ProductListItem from '../ProductListItem/ProductListItem.js';

class ProductList extends Component {
  
  componentDidMount() {
    this.props.actions.fetchProducts();
  }

  render() {
    if(this.props.productItems.productItems.length) {
    var productItems = this.props.productItems.productItems[0].map(item => { 
      return (
          <ProductListItem 
            { ...this.props }
            product = {item}
            key = {item.id}
          />
      );
      });

      return(
        <div className="products-container">
          { productItems }
        </div>
      );
    }
    else {
      return(<div>Loading.....</div>)
    }
  }
}

export default ProductList;