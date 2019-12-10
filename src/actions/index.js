import axios from 'axios';

const URL = "https://raw.githubusercontent.com/sraksh/sHOPcart/master/src/data/products.json";

export const addItem = (data) => ({
  type: 'ADD_ITEM',
  data
});

export const removeItem = id => ({
  type: 'REMOVE_ITEM',
  id
});

export const populateProducts = res => ({
  type: 'FETCH_PRODUCTS',
  payload: res
});

export const fetchProducts = () => {
  return (dispatch) => {
    axios.get(URL).then((res) => {
      dispatch(populateProducts(res));
    });
  };
 
};