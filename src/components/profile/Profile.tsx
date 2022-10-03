import React from 'react'
import {ProfileStyled} from "./profile.styled";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {StoreType} from "../../redux/store";
import {MyPostsContainer} from "./MyPostsContainer/MyPostsContainer";

type PropsPostsType = { store:StoreType}

export function Profile(props:PropsPostsType) {
    return (
        <ProfileStyled>
           <ProfileInfo  userName='Nadejda' description='I have a dog' imgPath='image1.jpg'/>
            <MyPostsContainer store={props.store}/>
        </ProfileStyled>
    )
}
