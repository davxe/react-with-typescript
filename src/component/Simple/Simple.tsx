import React,{useState} from 'react'
interface IProps{
    name:string,
    age?:number
}
export const Simple:React.FC<IProps>=(props:IProps)=>{
    const [display,setDisplay]=useState<boolean>(false)
    const renderAge=()=>{
        return props.age?`Age:${props.age}`:null;
    }
    const handleToggle=()=>{
        setDisplay((currentState)=>{
            const newValue=!currentState
            return newValue
        })
    }
    return (
        <div>
            <div>
                <button type='button' onClick={handleToggle}>Toogle</button>
            </div>
            <div>
                {display?`simple Functional component
            Name:-${props.name}&nbsp;&nbsp;
            ${renderAge()}`:''}
            </div>
            <hr/>
            
        </div>
    )
}