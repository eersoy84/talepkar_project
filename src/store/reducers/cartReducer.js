import { ACTION_TYPES } from '../actions/cartActions'
import { storeProducts } from '../../data'
const initState = {
    products: storeProducts,
    singleProduct: null,
    cart: [],
};

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_TO_CART:
            let tempProducts = [...state.products];
            const index = tempProducts.indexOf(tempProducts.find(q => q.id === action.id))
            const product = tempProducts[index];
            product.inCart = true;
            product.count = 1;
            const price = product.price;
            product.total = price;
            let x = tempProducts.valueOf()===state.products.valueOf() 
            return {
                ...state,
                products: tempProducts,
                cart: [...state.cart, product]
            };
        case ACTION_TYPES.GET_BY_ID:
            console.log("getById")
            let single = state.products.find(product => product.id === action.id);
            return {
                ...state,
                singleProduct: single
            }
        case ACTION_TYPES.GET_ALL:
            let temp = { ...state.products };
            console.log(state, "getAll in Reducer")
            return {
                ...state,
                products: [...temp]
            }
        default:
            return state;
    }
}
export default cartReducer