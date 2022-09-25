import React from 'react'
import {ProfileStyled} from "./profile.styled";
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {PostsType} from "../../redux/state";

type PropsPostsType = { posts: PostsType,newPostText:string }

export function Profile(props:PropsPostsType) {
    return (
        <ProfileStyled>
           <ProfileInfo  userName='Nadejda' description='I have a dog' imgPath='image1.jpg'/>
            <MyPosts  newPostText={props.newPostText} posts={props.posts}/>
        </ProfileStyled>
    )
}
