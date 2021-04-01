import React, { useEffect, useState } from 'react'
import { productInfo } from '../../data/productData'

export const ProductInfo:React.FC =(props:any)=>{
    const [product,setProduct]=useState({title:'',price:0})
    useEffect(()=>{
        // get the product id from the path parameter
        const {id}=props.match.params
        if(id){
            console.log(productInfo)
            const productDetail=productInfo.find(p=>{
                return p.id==id
            })
            if(productDetail){
                setProduct(productDetail)
            }
        }
        console.log('props data',props)
    },[])
    return(
        <div>
            <h1>Product Name:{product.title}</h1>
            <h1>Product price:{product.price}</h1>
        </div>
    )
}