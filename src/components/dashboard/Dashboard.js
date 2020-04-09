import React, { Component } from 'react'
import ProductList from '../products/ProductList'
import Sidebar from '../layout/Sidebar'
import { connect } from 'react-redux'


class Dashboard extends Component {
    render() {
        const { products } = this.props;
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2">
                        <Sidebar> Buraya Gelecek</Sidebar>
                    </div>
                    <div className="col-sm-10">
                        <ProductList />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard