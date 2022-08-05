import React from 'react'
import {MyPostsStyled} from "./myPosts.styled";
import {PostItem} from "./post/postItem";


export function MyPosts() {
    return (
        <MyPostsStyled>My Posts

            <div>
                <textarea></textarea>
                <button>Add new Post</button>
            </div>
            <div>
                <PostItem content="Hi!How are you?" likesCount={23} srcImage='avatar.jpg'/>
                <PostItem content="It's very beautiful day" likesCount={77} srcImage='avatar2.jpg'/>
            </div>
        </MyPostsStyled>
    )
}