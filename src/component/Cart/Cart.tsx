import React from 'react'
interface IList{
    list:Array<any>
}
export const Cart:React.FC<IList>=({list}:IList)=>{
    return(
        <div className='cart'>
            {list.length} products
            <div>
                
            {list.map(({title,price,quantity},index)=>(
                <div key={index}>
                    {title} - {price} - {quantity}
                </div>
            ))}
            </div>
        </div>
    )
}