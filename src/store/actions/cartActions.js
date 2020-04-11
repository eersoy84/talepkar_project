export const ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    GET_BY_ID: 'GET_BY_ID',
    GET_ALL: 'GET_ALL',
    OPEN_MODAL: 'OPEN_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL',
    INCREMENT:'INCREMENT',
    DECREMENT:'DECREMENT',
    REMOVE_ITEM:'REMOVE_ITEM',
    CLEAR_CART:'CLEAR_CART'
}


export const addToCart = (id) => {
    return {
        type: ACTION_TYPES.ADD_TO_CART,
        id
    };
};

export const removeFromCart = (id) => {
    return {
        type: ACTION_TYPES.REMOVE_FROM_CART,
        id
    };
};
export const getAll = () => {
    return {
        type: ACTION_TYPES.GET_ALL
    };
};

export const getById = id => {
    return {
        type: ACTION_TYPES.GET_BY_ID,
        id
    };
};

export const openModal = id => {
    return {
        type: ACTION_TYPES.OPEN_MODAL,
        id
    };
};
export const closeModal = () => {
    return {
        type: ACTION_TYPES.CLOSE_MODAL
    };
};

export const increment = (id) => {
    return {
        type: ACTION_TYPES.INCREMENT,
        id
    };
};
export const decrement = (id) => {
    return {
        type: ACTION_TYPES.DECREMENT,
        id
    };
};
export const removeItem = (id) => {
    return {
        type: ACTION_TYPES.REMOVE_ITEM,
        id
    };
};
export const clearCart = () => {
    return {
        type: ACTION_TYPES.CLEAR_CART
    };
};