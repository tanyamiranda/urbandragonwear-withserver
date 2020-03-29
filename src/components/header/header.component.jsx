import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './header.styles.scss';

import {ReactComponent as DragonLogo} from '../../assets/dragonyinyang.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';

const Header = ({currentUser, hidden}) => (

    <div className="header">
        <Link className="logo-container" to="/">
            <DragonLogo/>
        </Link>
        <Link className="logo-name" to="/">
            Urban Dragon Wear
        </Link>
        
        <div className="options">

            <Link to="/shop" className="option">SHOP</Link>
            {
                !currentUser ? null : (
                    <Link to="/account" className="option">ACCOUNT</Link>
                ) 
            }
            {
                currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                ) : (
                    <Link to="/signin" className="option">SIGN IN</Link>
                )
            }

            <CartIcon />
        </div>
        {
            hidden ?  null : (
                <CartDropDown/>
            )
        }
        
    </div>
);

const mapStateToProps = createStructuredSelector ({
    currentUser : selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps) (Header);