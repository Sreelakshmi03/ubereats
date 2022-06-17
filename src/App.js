import React from 'react'
import Header from './components/Header/Header'
import "./components/Header/Header";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Menucard from './components/menu/Menucard';
import Cart from './components/Cart/Cart';
import { menuItemsData } from "./apis/data";
import Footer from './components/footer/Footer';
import Center from './components/center/Center';
import CenterBox from './components/center/CenterBox';
import SignIn from './components/auth/SIgnIn';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/menu" element={<Menucard list={menuItemsData} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={ <SignIn/>} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App