import React from 'react'
import {AiOutlinePlus} from "react-icons/ai"
import { BiMinus } from "react-icons/bi";
import  "./style.css";

const ButtonAddRemoveItem = ({ quantity, handleAddItem, handleRemoveItem }) => {
  return (
    <div className="btnAddRemove">
      {quantity !== 0 ? (
        <div className="btnAddRemove-positive">
          <BiMinus onClick={handleRemoveItem} />
          <span>{quantity}</span>
          <AiOutlinePlus onClick={handleAddItem} />
        </div>
      ) : (
        <div className="btnAddremove-negative" onClick={handleAddItem}>
          <span>ADD</span>
          <AiOutlinePlus />
        </div>
      )}
    </div>
  );
};

export default ButtonAddRemoveItem