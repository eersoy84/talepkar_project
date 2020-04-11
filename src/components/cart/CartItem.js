import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement, removeItem, clearCart } from '../../store/actions/cartActions'

const CartItem = ({ cartItem }) => {
    console.log(cartItem)
    const { id, title, img, price, total, count } = cartItem
    return (
        <div className="row my-5 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img
                    src={img}
                    style={{ width: '5rem', height: "5rem" }}
                    className="img-fluid"
                    alt="product" />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product:</span>
                {title}
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price:</span>
                {price}
            </div>

            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1"
                            onClick={() => decrement(id)}>-</span>
                        <span className="btn btn-black mx-1"
                        >{count}</span>
                        <span className="btn btn-black mx-1"
                            onClick={() => increment(id)}>+</span>
                    </div>
                </div>

            </div>

            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={()=>removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <strong>item total: $ {total}</strong>

            </div>

            {/**/}


        </div>
    )
}
const mapDispatchToProps = {
    increment,
    decrement,
    removeItem,
    clearCart
}
export default connect(null, mapDispatchToProps)(CartItem)
