import React from 'react'
import ButtonAddRemoveItem from '../common/ButtonAddRemoveItem';
import "./menu.css";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  cartAddItem,
  cartRemoveItem,
} from '../../redux/cart/cart.action';
import {
  selectCartItems,
  selectCartItemsCount,
} from '../../redux/cart/cart.selector';


const MenuItems = ({
  item,
  cartCount,
  cartList,
  cartAddItem,
  cartRemoveItem,
}) => {
  console.log(item);
  const { id, name, info, price, img } = item;
  const handleQuantity = () => {
    let quantity = 0;
    if (cartCount !== 0) {
      const foundItemInCart = cartList.find(item => item.id === id);
      if (foundItemInCart) {
        quantity = foundItemInCart.quantity;
      }
    }
    return quantity;
  };
  return (
    <div className="item">
      <img src={img} alt="img" />
      <div className="item-head_desc">
        <p className="head_desc-name">{name}</p>
        <p className="head_dec_info">
          <small>{info}</small>
        </p>
      </div>
      <div className="item-foot_desc">
        <span className="item-foot_price">${price}</span>
        <ButtonAddRemoveItem
          quantity={handleQuantity()}
          handleAddItem={() => cartAddItem(item)}
          handleRemoveItem={() => cartRemoveItem(item)}
        />
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
});
const mapDispatchToProps = dispatch => ({
  cartAddItem: item => dispatch(cartAddItem(item)),
  cartRemoveItem: item => dispatch(cartRemoveItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItems);