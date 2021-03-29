import React, { PropsWithChildren } from 'react'
interface IProps{
    title:String,
    price:number,
}
export const Product:React.FC<IProps>=(props:PropsWithChildren<IProps>)=>{
    return(
        <div className={"product"}>
            <h3>Name:-{props.title}</h3>
            <h5>Price:-{props.price}</h5>
            {props.children}
        </div>
    )
}