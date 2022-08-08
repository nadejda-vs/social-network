import React from 'react'
import {MyPostsStyled} from "./myPosts.styled";
import {PostItem} from "./post/postItem";
import {PostsType} from "../../../index";

type PropsPostsType = { posts: PostsType }

export function MyPosts(props: PropsPostsType) {
    return (
        <MyPostsStyled>My Posts
            <div>
                <div><textarea/></div>
                <div>
                    <button>Add new Post</button>
                </div>
            </div>
            <div>
                {props.posts.map(p => (<PostItem
                    content={p.message}
                    likesCount={p.likesCount}
                    srcImage={p.srcImage}/>)
                )}
            </div>
        </MyPostsStyled>
    )
}