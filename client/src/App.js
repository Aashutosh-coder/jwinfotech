 
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import soludata from './solutionsdata'
import productsdata from './productsdata';
import { useState } from 'react';
import Products from './components/Products';


function App() {
const [carddata, setcarddata] = useState(soludata);
const [products,setproducts] = useState(productsdata);
  return (
    <>
        <Navbar></Navbar>
        <Hero></Hero>
        
        <Solutions carddata ={carddata} ></Solutions>
        <Products products = {products} ></Products> 
    </>
  );
}

export default App;
