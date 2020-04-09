import { ACTION_TYPES } from '../actions/cartActions'
import { storeProducts } from '../../data'
const initState = {
    products: [...storeProducts],
    selectedProduct: null,
    cart: [],
};

const setProducts = (products) => {
    let tempProducts = [];
    products.forEach(item => {
        let singleItem = { ...item };
        tempProducts = [...tempProducts, singleItem]
    });
    return tempProducts;
}

const getItem = (array,id) => {
    return array.find(item => item.id === id)
}

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_TO_CART:
            const tempProducts = setProducts(state.products);
            const index = tempProducts.indexOf(getItem(tempProducts,action.id))
            var product = tempProducts[index];
            product.inCart = true;
            product.count = 1;
            const price = product.price;
            product.total = price;
            return {
                ...state,
                products: tempProducts,
                cart: [...state.cart, product],
                selectedProduct : product
            };
        case ACTION_TYPES.GET_BY_ID:
            const tmp = setProducts(state.products);
            const single = getItem(tmp,action.id);
            return {
                ...state,
                selectedProduct: single
            }
        case ACTION_TYPES.GET_ALL:
            console.log(state, "getAll in Reducer")
            return {
                ...state,
                products: setProducts(state.products)
            }
        default:
            return state;
    }
}
export default cartReducer