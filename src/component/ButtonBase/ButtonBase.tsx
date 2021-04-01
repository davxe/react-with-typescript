import React from 'react'
import styled, { css } from 'styled-components'
export const ButtonBase =styled.button<{disabled?:boolean,pad?:string}>`
    padding:${(props)=>props.pad ? props.pad:'10px'};
    background-color:${(props)=>props.disabled?'red':'yellow'};
    font-weight:bold;
    color:${(props)=>props.disabled?'#000000':'#fffcfc'};
    width:100%;
    font-size:22px;

    ${(props)=>props.disabled && css`
        font-size:12px;
        line-height:20px;
        font-weight:500;
        padding:2px;
    `}
`;