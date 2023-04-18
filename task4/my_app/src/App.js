import { useEffect, useState } from 'react';
import { Routes,Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import ProductList from './Components/ProductList/ProductList';
import './App.css';
import AboutUs from './Components/pages/AboutUs/AboutUs';

function App() {

const [products, setProducts] = useState([
{id: 1, title: 'Product 1', price: 899 }, 
{id: 2, title: 'Product 2', price: 427 },
{id: 3, title: 'Product 3', price: 876 },
{id: 4, title: 'Product 4', price: 563 },
{id: 5, title: 'Product 5', price: 233 } 

]); 

const [name,setName] = useState ('Nikname');


const deleteProduct = (productId) => {
    const newProducts = products.filter(product => product.id !== productId);
    setProducts (newProducts);
}

useEffect(() => { 
  console.log('use Effect');
},[name]);

return (
    <div>
      <Header/>
      
        <Routes>
        <Route path='/about' element = {<AboutUs/>}>   </Route>
        <Route path = "/" element ={<ProductList products = {products} deleteProduct = {deleteProduct}/>}>

          </Route>
        </Routes>
        
      <button onClick={ () => setName ('My name')}> Set Name </button>
      <p>Name: {name}</p>
    </div>
  );
}

export default App;