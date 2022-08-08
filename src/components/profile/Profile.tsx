import React from 'react'
import {ProfileStyled} from "./profile.styled";
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";


export function Profile() {
    return (
        <ProfileStyled>
           <ProfileInfo  userName='Nadejda' description='I have a dog' imgPath='image1.jpg'/>
            <MyPosts/>
        </ProfileStyled>
    )
}