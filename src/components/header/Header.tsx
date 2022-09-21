import React from 'react'
import {HeaderStyled} from "./header.styled";

export function Header() {
    return (
        <HeaderStyled>
            <img src={'logo.jpg'} alt={''} style={{width: "100px", height: "100%"}}/>
            <h6>Hi,my dear friend!</h6>
        </HeaderStyled>
    )
}