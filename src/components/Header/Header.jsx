
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Center from "../center/Center";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";
import {CgProfile} from "react-icons/cg"
import "./Header.css";
// import { Menu, LocationOn,WatchLater,ArrowDownward } from "@material-ui/icons";

function Header() {
  let navigate = useNavigate("/")
  const [headbg, setheadbg] = useState("transparent");
  const [shadow, setshadow] = useState("none");
  const [inputdisplay, setinputdisplay] = useState(0);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
      setheadbg("#FFFFFF");
      setshadow("rgb(226 226 226) 0px -2px 0px inset");
      setinputdisplay(1);
    } else {
      setheadbg("transparent");
      setshadow("none");
      setinputdisplay(0);
    }
  });

  return (
    <>
      <div className="header">
        <div className="header__background"></div>

        <div className="header__upper">
          <div
            className="header__upperheader"
            style={{ backgroundColor: headbg, boxShadow: shadow }}

          >
            <div className="header__upperheaderleft">
              {/* <Menu /> */}
              <img
                src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg "
                alt="uber eats"
              />
            </div>
            <div
              className="header__upperheadercenter"
              style={{ transform: `scaleX(${inputdisplay})` }}
            >
              {/* <LocationOn /> */}
              <input type="text" placeholder="Enter delivery address" />
            </div>

            <div className="header__upperheaderright">
              {/* <span>
                <CgProfile />
              </span> */}
             
                {" "}
                <button onClick={() => navigate("/signin")}> Sign in </button>
              
            </div>
          </div>
        </div>
        <div className="header__center">
          <div className="header__centerbox">
            <h1> Want food? Get food. </h1>
            <div className="header__centercenter">
              <div className="header__center1">
                {/* <LocationOn   /> */}
                <input type="text" placeholder="Enter Delivery Address" />
              </div>
              <div className="header__center2">
                {/* <WatchLater /> */}
                <h3> Deliver now </h3>
                {/* <ArrowDownward /> */}
              </div>
              <div className="header__center3">
                <Link to="./menu">
                  <span>
                    <h3> Find food </h3>
                  </span>
                </Link>
              </div>
            </div>
            <h3>
              {" "}
              <span>SignIn</span> For your recent address
            </h3>
          </div>
        </div>
      </div>
      <Center />
      <Footer />
    </>
  );
}

export default Header;
