export const ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    GET_BY_ID: 'GET_BY_ID',
    GET_ALL: 'GET_ALL',
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
        type: ACTION_TYPES.GET_ALL,
    };
};

export const getById = id => {
    return {
        type: ACTION_TYPES.GET_BY_ID,
        id
    };
};

