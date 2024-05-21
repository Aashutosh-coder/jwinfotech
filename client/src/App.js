 
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import soludata from './data/solutionsdata';
import productsdata from './data/productsdata';
import testimonialdata from './data/testimonialdata';
import { useState } from 'react';
import Products from './components/Products';
import Work from './components/Work';
import Blogs from './components/Blogs'


function App() {
const [carddata, setcarddata] = useState(soludata);
const [products,setproducts] = useState(productsdata);
const [testimonials,settestimonials] = useState(testimonialdata);
  return (
    <>
        <Navbar></Navbar>
        <Hero></Hero>
        
        <Solutions carddata ={carddata} ></Solutions>
        <Products products = {products} ></Products>  
        <Work testimonials = {testimonials} ></Work>
        <Blogs></Blogs>
    </>
  );
}

export default App;
