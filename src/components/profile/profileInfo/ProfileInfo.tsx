import React from 'react'
import {ProfileInfoStyled} from "./profileInfo.styled";

type PropsType = {
    userName: string
    description: string
    imgPath: string
}

export function ProfileInfo({userName, description, imgPath}: PropsType) {
    return (
        <ProfileInfoStyled>
            <img src={imgPath}  alt={''} style={{width: "500px"}}/>
            <h4>My name is {userName}.</h4>
            <p>{description}</p>
        </ProfileInfoStyled>
    )
}