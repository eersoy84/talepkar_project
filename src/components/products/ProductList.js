import Product from './Product';
import Title from '../layout/Title'
import { connect } from 'react-redux'
import { getAll } from '../../store/actions/cartActions'

import React, { Component } from 'react'

class ProductList extends Component {
    // componentDidMount() {
    //      this.props.getAll();
    // }
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
    console.log(state, "mapStateToProps -- Product List")
    return {
        products: state.cartReducer.products
    }
}
// const mapDispatchToProps = {
//     getAll
// };


export default connect(mapStateToProps)(ProductList)