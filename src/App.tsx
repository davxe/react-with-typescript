import React,{useEffect, useState} from 'react';
import './App.css';
import { Cart, Counter, Product, ProductInfo, ProductList, Products, UserInfo } from './component';
import { Simple } from './component/Simple/Simple';
import { productInfo } from './data/productData';
import {BrowserRouter,Link,Route} from 'react-router-dom';
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
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
          </ul>
        </div>
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
          exact={true}
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
          exact={true}
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
        <Route path='/products' component={Products}/>
        <Route path='/product/:id' component={ProductInfo}/>
      </BrowserRouter>
    </div>
  );
}
export default App;