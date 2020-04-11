import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { clearCart } from '../../store/actions/cartActions'
import { Link } from 'react-router-dom'


export const CartTotal = (props) => {
    const { cartTotal, cartTax, cartSubTotal, clearCart } = props
    console.log(cartSubTotal)
    return (
        <div>
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 
                    text-capitalize text-right">
                            <Link to="/">
                                <button className="btn btn-outline-danger text-uppercase mb-3 px-5"
                                    type="button"
                                    onClick={() => clearCart()}
                                >clear carT
                                </button>
                            </Link>
                            <h5>
                                <span className="text-title">
                                    subtotal: <strong>$ {cartSubTotal.toFixed(2)}</strong>
                                </span>
                            </h5>

                            <h5>
                                <span className="text-title">
                                    Tax: <strong>$ {cartTax}</strong>
                                </span>
                            </h5>

                            <h5>
                                <span className="text-title">
                                    <span style={{color:'red'}}>
                                        total: <strong>$ {cartTotal.toFixed(2)}</strong>
                                    </span>
                                </span>
                            </h5>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </div>
    )
}

const mapDispatchToProps = {
    clearCart
}

export default connect(null, mapDispatchToProps)(CartTotal)
