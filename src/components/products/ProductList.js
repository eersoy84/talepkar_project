import Product from './Product';
import Title from '../layout/Title'
import { connect } from 'react-redux'

import React, { Component } from 'react'

class ProductList extends Component {

    render() {
        const { products } = this.props 
        return (
            <React.Fragment>
                <div className="py-3">
                    <div className="container">
                        <div className="row">
                            <Title name="Products" title="List" />
                        </div>
                        <div className="row">
                            {products && products.map(product => {
                                return (
                                    <Product product={product} key={product.id} />
                                )
                            })}

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        products: state.cartReducer.products
    }
}

export default connect(mapStateToProps)(ProductList)