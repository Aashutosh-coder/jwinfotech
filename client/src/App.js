 
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import soludata from './solutionsdata'
import { useState } from 'react';

function App() {
const [carddata, setcarddata] = useState(soludata)
  return (
    <>
        <Navbar></Navbar>
        <Hero></Hero>
        
        <Solutions carddata ={carddata} ></Solutions>
    </>
  );
}

export default App;
