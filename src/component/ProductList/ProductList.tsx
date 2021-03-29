import React from 'react'
import { Product } from '../Product/Product'
interface IProduct{
    title:string,
    price:number,
    description?:string
}
interface IProps{
    list:Array<IProduct>,
    addToCart?:(product:any)=>void
}
export const ProductList:React.FC<IProps>=(props:IProps)=>{
    console.log(props.list)
    const handleAddToCart=(productInfo:any)=>{
        props.addToCart && props.addToCart(productInfo)
    }
    return(
        <div>
            {props.list.map((product,index)=>{
                return (<div key={index}>
                    <Product title={product.title} price={product.price}>
                        {product.description}
                        <button type='button' onClick={()=>handleAddToCart(product)}>Add to cart</button>
                    </Product>
                </div>)
            })}
        </div>
    )
}