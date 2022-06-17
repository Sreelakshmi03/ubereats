import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { IoIosBasket } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import {useNavigate} from "react-router-dom"
import "./cart.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsCount,
} from "../../redux/cart/cart.selector";



const CartCountbtn = ({ cartCount }) => {
  let navigate = useNavigate();
 
  return (
    <div className="btnCartCount" onClick={ () =>navigate("/cart")}>
      <div className="count">{cartCount >= 100 ? "99+" : cartCount}</div>
      {/* <AiOutlineShoppingCart /> */}
      <span>
        {" "}
        <BsCart/>
        {/* <IoIosBasket /> */}
      </span>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
});
export default  connect(mapStateToProps)(CartCountbtn)