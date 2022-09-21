import React from 'react'
import {MyPostsStyled} from "./myPosts.styled";
import {PostsType} from "../../../redux/state";
import {PostItem} from "./post/postItem";

type PropsPostsType = { posts: PostsType }

export function MyPosts(props: PropsPostsType) {

    let newElementPost = React.createRef<HTMLTextAreaElement>()
    const addNewPost = () => {
        console.log(newElementPost.current?.value)
        let text = newElementPost.current?.value
        alert(text)
    }

    return (
        <MyPostsStyled>
            My Posts
            <div>
                <div>
                    <textarea ref={newElementPost}/>
                </div>
                <div>
                    <button onClick={addNewPost}>Add new Post</button>
                </div>
            </div>
            <div>
                {props.posts.map(p =>
                    <PostItem
                        key={p.id}
                        content={p.message}
                        likesCount={p.likesCount}
                        srcImage={p.srcImage}/>
                )}
            </div>
        </MyPostsStyled>
    )
}