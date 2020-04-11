import { ACTION_TYPES } from '../actions/cartActions'
import { storeProducts, detailProduct } from '../../data'
const initState = {
    products: [...storeProducts],
    selectedProduct: null,
    cart: storeProducts,
    modalOpen: false,
    modalProduct: null,
    cartSubTotal: 0,
    cartTax: 0,
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
            return {
                ...state,
                products: tmp,
                cart: [...state.cart, product],
                selectedProduct: product
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
        case ACTION_TYPES.GET_ALL:{

            return {
                ...state,
                products: setProducts(state.products)
            }
        }
        case ACTION_TYPES.OPEN_MODAL:{

            const tmp = setProducts(state.products);
            const single = getItem(tmp, action.id);
            return {
                ...state,
                modalProduct: single,
                modalOpen: !state.modalOpen
            }
        }
        case ACTION_TYPES.CLOSE_MODAL:{

            return {
                ...state,
                modalOpen: !state.modalOpen
            }
        }
        case ACTION_TYPES.INCREMENT:{

            console.log("clear cart")
        }

        case ACTION_TYPES.DECREMENT:{
            console.log("clear cart")
        }

        case ACTION_TYPES.REMOVE_ITEM:
            console.log("clear cart")

        case ACTION_TYPES.CLEAR_CART:
            console.log("clear cart")

        default:
            return state;
    }
}
export default cartReducer