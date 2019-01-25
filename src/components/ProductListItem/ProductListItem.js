import React, { Component } from 'react';
import './ProductListItem.css';

class ProductListItem extends Component {
  
  addProductToCart = (data) => {
    this.props.actions.addItem(data);
  }
  removeProductFromCart = (id) => {
    this.props.actions.removeItem(id);
  }

  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.product.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{this.props.product.name}</h5>
          <p className="card-text">{this.props.product.price}</p>
        </div>
        <button className={this.props.product.isAddedToCart ? "btn btn-danger" : "btn btn-primary"} onClick={this.props.product.isAddedToCart ? () => this.removeProductFromCart(this.props.product.id) : () => this.addProductToCart(this.props.product) }> {this.props.product.isAddedToCart ? "Remove" : "Add To Cart"} </button>
      </div>
    );
  }
}

export default ProductListItem;
