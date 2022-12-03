import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import {Routes,Route} from 'react-router-dom';
import Products from './Component/Products';
import Product from './Component/Product';
import Cart from './Component/Cart';
import Registration from './Component/Registration';
import Login from './Component/Login';
import Footer from './Component/Footer';
import Contact from './Component/Contact';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="" element={<Home/>}/> 
    <Route path="products" element={<Products/>}/> 
    <Route path="product/:id" element={<Product/>}/> 
    <Route path="cart" element={<Cart/>}/> 
    <Route path="register" element={<Registration/>}/> 
    <Route path="login" element={<Login/>}/> 
    <Route path="contact" element={<Contact/>}/> 
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
