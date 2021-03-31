// in this cpomponent we display the product

import React, { useState,PropsWithChildren } from 'react'
interface IProps{
    id?:number,
    title:string,
    price:number,
    addToCart?:(product:any)=>void
    updateTitle:(data:{title:string,id:number})=>void

}
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
        props.updateTitle({title,id:props.id||0})
    }
    return(
        <div className={"product"}>
            {!isEdit&&<h3 onClick={()=>setIsEdit(true)}>Name:-{title}</h3>}
            {isEdit&&<div>
                <input type='text' value={title} onChange={handleTitleChange}/>
                <button type='button' onClick={()=>updateTitle()}>Update</button>
                </div>}
            <h5>Price:-{props.price}</h5>
            {props.children}
            <div>
                <input type='number' min='1' max='5' value={quantity} onChange={handleQuantityChange}/>
            </div>
            <div>
                <button type='button' onClick={handleAddToCart}>Add to cart</button>
            </div>
        </div>
    )
}