import React, { Component } from 'react'
import styled from "styled-components";
import { ButtonContainer } from '../layout/Button'
import { connect } from 'react-redux'
import { closeModal } from '../../store/actions/cartActions'
import { Link } from 'react-router-dom'

export class Modal extends Component {
    render() {
        const { isModalOpen, modal, closeModal } = this.props
        if (!isModalOpen) {
            return (null)
        } else {
            return (
                <ModalContainer>
                    <div className="container">
                        <div className="row">
                            <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                <h5>Item Added To The Cart</h5>
                                <img src={modal.img} className="img-fluid" alt="product" />
                                <h5>{modal.title}</h5>
                                <h5 className="text-muted">price: ${modal.price}</h5>
                                <Link to="/">
                                    <ButtonContainer
                                        onClick={() => closeModal()}>

                                        Continue Shopping</ButtonContainer>
                                </Link>
                                <Link to="/cart">
                                    <ButtonContainer cart
                                        onClick={() => closeModal()}>

                                        go to cart</ButtonContainer>
                                </Link>


                            </div>
                        </div>
                    </div>
                </ModalContainer>
            )
        }
    }
}
const mapStateToProps = (state) => {
    return {
        isModalOpen: state.cartReducer.modalOpen,
        modal: state.cartReducer.modalProduct,
    }
}
const mapDispatchToProps = {
    closeModal
}
const ModalContainer = styled.div
    `
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background:var(--mainWhite);
}
`
export default connect(mapStateToProps, mapDispatchToProps)(Modal)

