import React from 'react'
// import { menuItemsData } from '../../apis/data';
import Menucard from '../menu/Menucard';
import "./cartpg.css"
import Emptycart from './Emptycart';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from "../../redux/cart/cart.selector";

const Cart = ({ cartCount, cartList, cartTotal }) => {
  
  return (
    <div>
      
      {cartCount === 0 ? ( <Emptycart/>):
     (
      <div className="orders">
        <h1 className="orders-heading">Your Orders</h1>
        <div className="orders-menu">
          <Menucard list={cartList} />
        </div>

            <h2 className="orders-total">Your Total ${ cartTotal}</h2>
          </div>
     
       
     )}
   
    </div> 
  );
}
const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});
export default connect(mapStateToProps)(Cart)