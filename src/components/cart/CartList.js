import React, { Component } from 'react'
import CartItem from './CartItem'

export const CartList = (props) => {
     const { cart } = props

    return (
        <div className="container-fluid">
            {cart.map(cartItem => {
                return (
                    <CartItem cartItem={cartItem} key={cartItem.id} />
                )
            })}
        </div>
    )
}

export default CartList
