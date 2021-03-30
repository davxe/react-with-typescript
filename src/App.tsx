import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Cart, Counter, Product, ProductList, UserInfo } from './component';
import { Simple } from './component/Simple/Simple';
import { productInfo } from './data/productData';

function App() {
  const [isDisplayed,setIsDisplayed]=useState<boolean>(true);
  const [cartProduct,setCartProduct]=useState<Array<any>>([])
  const addToCart=(product:any)=>{
    console.log("product info",product)
    const newProduct=[...cartProduct,product]
    setCartProduct(newProduct)
  }
  const updateTitle=(data:{title:string,id:number})=>{
    console.log('update data',data)
  }
  return (
    <div className="App">
      <h1>Welcome to React with typescript</h1>
      {/* <div>
        <Counter/>
      </div> */}
      
      {/* <div id='user-info'>
        
      </div>
      <div>
        <Simple name='prince'/>
      </div> */}
      {/* <div>
        <Product title='Pen' price={5}>
          <Counter/><hr/>
          <p><Simple name='kaushal' age={23}/></p>
          <div>
            <button type='button' onClick={()=>setIsDisplayed(x=>!x)}>Toggle</button>
          </div>
          {isDisplayed && <UserInfo lastLogin='somedata'/>}
        </Product>
      </div> */}
      <div>
        <ProductList list={productInfo} addToCart={addToCart} updateTitle={updateTitle}/>
      </div>
      <div>
        <Cart list={cartProduct}/>
      </div>
    </div>
  );
}

export default App;
