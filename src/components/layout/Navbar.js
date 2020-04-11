import React from 'react'
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import logo from '../../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import { connect } from 'react-redux'


const Navbar = ({ number }) => {
    return (
        // <nav className="nav-wrapper grey darken-3">
        //     <div className="container">
        //         <Link to='/' className='brand-logo'> Project List</Link>
        //             <SignedInLinks />
        //             <SignedOutLinks />
        //     </div>
        // </nav>

        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">

            <Link to='/' >
                <img src={logo} alt="store" className="navbar-brand" />
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to='/' className="nav-link">products </Link>
                </li>
            </ul>
            <Link to='/cart' className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                        <i className="fas fa-cart-plus" />
                    </span>
                    <sup><span class="badge">{number !== 0 ? number : null}</span></sup>
                </ButtonContainer>
            </Link>

        </NavWrapper>

    )
}
const mapStateToProps = (state) => {
    return {
        number: state.cartReducer.cart.length,
    }
}
const NavWrapper = styled.nav
    `
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem; //1rem = 16px;
    text-transform:capitalize;
    
}

`


export default connect(mapStateToProps)(Navbar)

