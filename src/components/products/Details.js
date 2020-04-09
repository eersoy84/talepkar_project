import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { ButtonContainer } from '../layout/Button'
import { connect } from 'react-redux'
import { addToCart } from '../../store/actions/cartActions'

class Details extends Component {
    render() {

        const { product, addToCart } = this.props
        return (

            <React.Fragment>
                <div className="container py-5">
                    <div className="row">

                        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                            <h1>{product.title}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <img src={product.img} alt="product" className="img-fluid" />
                        </div>
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                            <h2>Model : {product.title}</h2>
                            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                made by : <span className="text-uppercase">
                                    {product.company}
                                </span>
                            </h4>
                            <h4 className="text-blue">
                                <strong>
                                    price : <span>$ </span>{product.price}
                                </strong>
                            </h4>
                            <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                some info about product :
                            </p>
                            <p className="text-muted lead">
                                {product.info}
                            </p>
                            {/*Buttons*/}
                            <div>
                                <Link to='/'>
                                    <ButtonContainer>
                                        Back To Products
                                    </ButtonContainer>
                                </Link>
                                <ButtonContainer
                                    cart
                                    disabled={product.inCart ? true : false}
                                    onClick={() => addToCart(product.id)}
                                >
                                    {product.inCart ? "inCart" : "add to cart"}
                                </ButtonContainer>
                            </div>
                        </div>
                    </div>


                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("mapStateToPropsInfofrom details",state)
    return {

        product: state.cartReducer.singleProduct,
    }
}
const mapDispatchToProps = {
    addToCart
}

// const mapDispatchToProps = dispatch => {
//     return {
//         addToCart: id => {
//             dispatch(addToCart(id));
//         }
//     };
// };

export default connect(mapStateToProps, mapDispatchToProps)(Details)
