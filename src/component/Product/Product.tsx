// in this cpomponent we display the product

import React, { useState,PropsWithChildren } from 'react'
import styled from 'styled-components'
import { ButtonBase } from '../ButtonBase';
import { InputBase } from '../InputBase';
interface IProps{
    id?:number,
    title:string,
    price:number,
    addToCart?:(product:any)=>void
    updateTitle:(data:{title:string,id:number})=>void

}
const ProductContainer=styled.div`
width: 200px;
border:2px solid;
border-radius: 8px;
box-shadow: 1px 1px 1px #002fff;
display:flex;
margin:5px;
flex-direction:column;
`;
export const Product:React.FC<IProps>=(props:PropsWithChildren<IProps>)=>{
    const [quantity,setQuantity]=useState<number>(1)
    const [isEdit,setIsEdit]=useState<boolean>(false)
    const [title,setTitle]=useState<string>(props.title)
    const handleTitleChange =(event:React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(event.target.value)
    }
    const handleAddToCart=()=>{
        props.addToCart && props.addToCart({
            title:props.title,
            price:props.price,
            quantity,
        })
    }
    const handleQuantityChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log('quantity value',e.target.value)
        setQuantity(parseInt(e.target.value))
    }
    const updateTitle=()=>{
        setIsEdit(false)
        console.log('title',title)
        props.updateTitle({title,id:props.id||0})
    }
    return(
        <ProductContainer>
            {!isEdit&&<h3 onClick={()=>setIsEdit(true)}>Name:-{title}</h3>}
            {isEdit&&<div>
                <InputBase type='text' value={title} onChange={handleTitleChange}/>
                <ButtonBase disabled={true} type='button' onClick={()=>updateTitle()}>Update</ButtonBase>
                </div>}
            <h5>Price:-{props.price}</h5>
            {props.children}
            <div>
                <InputBase type='number' min='1' max='5' value={quantity} onChange={handleQuantityChange}/>
            </div>
            <div>
                <ButtonBase type='button' onClick={handleAddToCart}>Add to cart</ButtonBase>
            </div>
        </ProductContainer>
    )
}