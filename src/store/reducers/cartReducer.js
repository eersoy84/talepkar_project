import { ACTION_TYPES } from '../actions/cartActions'
import { storeProducts, detailProduct } from '../../data'
const initState = {
    products: [...storeProducts],
    selectedProduct: null,
    cart: [],
    modalOpen: false,
    modalProduct: null,
    cartSubTotal: 0,
    cartTax: 0.1,
    cartTotal: 0

};

const setProducts = (products) => {
    let tempProducts = [];
    products.forEach(item => {
        let singleItem = { ...item };
        tempProducts = [...tempProducts, singleItem]
    });
    return tempProducts;
}
const getItem = (array, id) => {
    return array.find(item => item.id === id)
}

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_TO_CART: {
            const tmp = setProducts(state.products);
            const index = tmp.indexOf(getItem(tmp, action.id))
            var product = tmp[index];
            product.inCart = true;
            product.count = 1;
            const price = product.price;
            product.total = price;
            const subTotal = state.cartSubTotal + product.total
            return {
                ...state,
                products: tmp,
                cart: [...state.cart, product],
                selectedProduct: product,
                cartSubTotal: subTotal,
                cartTotal: subTotal * (1 + state.cartTax)
            };
        }
        case ACTION_TYPES.GET_BY_ID: {

            const tmp = setProducts(state.products);
            const single = getItem(tmp, action.id);
            return {
                ...state,
                selectedProduct: single
            }
        }
        case ACTION_TYPES.GET_ALL: {

            return {
                ...state,
                products: setProducts(state.products)
            }
        }
        case ACTION_TYPES.OPEN_MODAL: {

            const tmp = setProducts(state.products);
            const single = getItem(tmp, action.id);
            return {
                ...state,
                modalProduct: single,
                modalOpen: !state.modalOpen
            }
        }
        case ACTION_TYPES.CLOSE_MODAL: {

            return {
                ...state,
                modalOpen: !state.modalOpen
            }
        }
        case ACTION_TYPES.INCREMENT: {

            const newCart = setProducts(state.cart);
            const index = newCart.indexOf(getItem(newCart, action.id))
            var product = newCart[index];
            product.count += 1;
            product.total = product.price * product.count;
            const subTotal = state.cartSubTotal + product.price
            return {
                ...state,
                cart: newCart,
                cartSubTotal: subTotal,
                cartTotal: subTotal * (1 + state.cartTax)
            }
        }

        case ACTION_TYPES.DECREMENT: {
            const newCart = setProducts(state.cart);
            const index = newCart.indexOf(getItem(newCart, action.id))
            var product = newCart[index];
            if (product.count > 1) {
                product.count -= 1;
                product.total = product.price * product.count;
                const subTotal = state.cartSubTotal - product.price
                return {
                    ...state,
                    cart: newCart,
                    cartSubTotal: subTotal,
                    cartTotal: subTotal * (1 + state.cartTax)
                }
            }
            else {
                return { ...state }
            }
        }

        case ACTION_TYPES.REMOVE_ITEM: {

            const newCart = setProducts(state.cart);
            const cartIndex = newCart.indexOf(getItem(newCart, action.id))
            const total = newCart[cartIndex].total;
            newCart.splice(cartIndex, 1);
            const tmp = setProducts(state.products);
            const index = tmp.indexOf(getItem(tmp, action.id))
            var product = tmp[index];
            product.inCart = false;
            product.count = 0;
            product.total = 0;
            const subTotal = state.cartSubTotal - total
            return {
                ...state,
                products: tmp,
                cart: newCart,
                cartSubTotal: subTotal,
                cartTotal: subTotal * (1 + state.cartTax)
            };
        }
        case ACTION_TYPES.CLEAR_CART:
            return {
                ...state,
                cart: [],
                products: storeProducts,
                cartSubTotal: 0,
                cartTotal: 0
            }

        default:
            return state;
    }
}
export default cartReducer