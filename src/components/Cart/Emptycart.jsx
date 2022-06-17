import React from 'react'
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./cartemp.css";

const Emptycart = () => {
    const navigate = useNavigate();
  return (
      <div className="emptyCart">
          <img src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png" alt="cart img" />
          <button onClick={() => navigate("/")}>
         <span><AiOutlineArrowLeft/>Shop Now</span>     
          </button>
          
    </div>
  )
}

export default Emptycart

