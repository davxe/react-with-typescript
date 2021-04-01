// in this we display all product list 

import React from 'react'
import { FlexBox } from '../../App'
import styled from 'styled-components'
import { Product } from '../Product/Product'
interface IProduct{
    id?:number,
    title:string,
    price:number,
    description?:string
}
interface IProps{
    list:Array<IProduct>,
    addToCart?:(product:any)=>void
    updateTitle:(data:{title:string,id:number})=>void
}
const ProductListContainer=styled.div`
    flex-wrap:wrap;
    display:flex;
    justify-content:space-around;
`;
export const ProductList:React.FC<IProps>=(props:IProps)=>{
    // console.log(props.list)
    // const handleAddToCart=(productInfo:any)=>{
    //     props.addToCart && props.addToCart(productInfo)
    // }
    return(
        <ProductListContainer>
            {props.list.map((product,index)=>{
                return (<FlexBox key={index}>
                    <Product 
                    id={product.id}
                    title={product.title} 
                    price={product.price} 
                    addToCart={props.addToCart} 
                    updateTitle={props.updateTitle}>
                        {product.description}
                        {/* <button type='button' onClick={()=>handleAddToCart(product)}>Add to cart</button> */}
                    </Product>
                </FlexBox>)
            })}
        </ProductListContainer>
    )
}