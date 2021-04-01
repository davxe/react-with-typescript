// we display the cart value 
import React from 'react'
import styled from 'styled-components'
interface IList{
    list:Array<any>;
    displayAll?:boolean;
}

const CartContainer=styled.div`
    display:flex;
    text-align:center;
    padding:5px;
    border:1px solid #ddd;
    border-radius: 5px;
    background-color: darkorchid;
    box-shadow: 1px 1px 1px rgb(0,47,255);
`;

export const Cart:React.FC<IList>=({list,displayAll}:IList)=>{
    return(
        <CartContainer>
            {list.length} <br/> products
            {displayAll && <div>
            {list.map(({title,price,quantity},index)=>(
                <div key={index}>
                    {title} - {price} - {quantity}
                </div>
            ))}
            </div>}
        </CartContainer>
    )
}