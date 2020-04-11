import React, { Component } from 'react'
import Title from '../layout/Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import { connect } from 'react-redux'
import CartList from './CartList'
import CartTotal from './CartTotal'


class Cart extends Component {
    render() {
        const { cart, cartSubTotal, cartTax, cartTotal } = this.props
        if (cart.length > 0) {
            return (
                <section>
                    <React.Fragment>
                        <Title name="youR" title="Cart" />
                        <CartColumns />
                        <CartList cart={cart} />
                        <CartTotal
                            cartSubTotal={cartSubTotal}
                            cartTax={cartTax}
                            cartTotal={cartTotal}
                        />
                    </React.Fragment>
                </section>
            )
        } else {
            return (
                <section>
                    <EmptyCart />

                </section>
            )
        }

    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer.cart,
        cartSubTotal: state.cartReducer.cartSubTotal,
        cartTotal: state.cartReducer.cartTotal,
        cartTax: state.cartReducer.cartTax,
    }
}
export default connect(mapStateToProps)(Cart)