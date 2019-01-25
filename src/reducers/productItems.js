// import * as action from '../constants/actions';

let initialState = {
  productItems: []
};


function productItems(state=initialState, action) {
  switch(action.type) {
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        productItems: [...state.productItems, action.payload.data]
      }

    default:
      return state;
  }
}

export default productItems;
