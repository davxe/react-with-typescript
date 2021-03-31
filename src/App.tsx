import React,{useEffect, useState} from 'react';
import './App.css';
import { Cart, Counter, Product, ProductList, UserInfo } from './component';
import { Simple } from './component/Simple/Simple';
import { productInfo } from './data/productData';
import {BrowserRouter,Route} from 'react-router-dom';
import { countReset } from 'node:console';
function App() {
  const [isDisplayed,setIsDisplayed]=useState<boolean>(true);
  const [cartProduct,setCartProduct]=useState<Array<any>>([])
  const [productList,setProductList]=useState<Array<any>>([])
  const addToCart=(product:any)=>{
    console.log("product info",product)
    const newProduct=[...cartProduct,product]
    setCartProduct(newProduct)
  }
  const updateTitle=(data:{title:string,id:number})=>{
    console.log('update data',data)
  }

  useEffect(()=>{
    setProductList(productInfo)
  })
  return (
    <div className="App">
      <h1>Welcome to React with typescript</h1>
      {/* <div>
        <Product title='Pen' price={5}>
          {isDisplayed && <UserInfo lastLogin='somedata'/>}
        </Product>
      </div> */} 
      <BrowserRouter>
        <Route 
          path='/counter' 
          component={Counter}
        />
        <Route 
          path='/productlist'
          render={(props)=>(
            <div>
              <Cart
                {...props}
                list={cartProduct}
              />
              <ProductList 
                {...props} 
                list={productList} 
                addToCart={addToCart} 
                updateTitle={updateTitle}
              />
            </div>
          )}
        />
        <Route 
          path='/simple'
          render={(props)=>(
            <Simple
              {...props}
              name='kaushal'
              age={24}
            />
          )}
        />
        <Route
          path='/userinfo'
          render={(props)=>(
            <UserInfo
              {...props}
              lastLogin='some data'
            />
          )}
        />
        <Route
          path='/product'
          render={(props)=>(
            <div>
              <Cart
                {...props}
                list={cartProduct}
              />
              <Product
                {...props}
                title={"desk"}
                price={50}
                updateTitle={updateTitle}
                addToCart={addToCart}
              />
            </div>
          )}
        />
        <Route
          path='/allcomponent'
          render={(props)=>(
            <div>
              <Cart
                {...props}
                list={cartProduct}
              />
              <Product {...props}
                title={"board"}
                price={50}
                updateTitle={updateTitle}
                addToCart={addToCart}
              >
                <button type='button' onClick={()=>setIsDisplayed(!isDisplayed)}>Toggle</button>
                {isDisplayed && <UserInfo lastLogin='somedata'/>}
              </Product>
            </div>
          )}
        />
      </BrowserRouter>
    </div>
  );
}
export default App;