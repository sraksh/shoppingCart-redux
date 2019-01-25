import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/Header/Header.js';
import ProductList from './components/ProductList/ProductList.js';
import CartSummary from './components/CartSummary/CartSummary.js';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';

import './App.css';

const mapStateToProps = state => ({
  productItems: state.productItems,
  cartItems: state.cartItems,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <div className="shopping-cart-container">
        <ProductList {...this.props}/>
        <CartSummary cartItems={this.props.cartItems}/>
       </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
