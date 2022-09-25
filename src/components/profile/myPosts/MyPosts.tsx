import React from 'react'
import {MyPostsStyled} from "./myPosts.styled";
import {addPost, PostsType, updateNewPostText} from "../../../redux/state";
import {PostItem} from "./post/postItem";

type PropsPostsType = { posts: PostsType, newPostText: string }

export function MyPosts(props: PropsPostsType) {

    let newElementPost = React.createRef<HTMLTextAreaElement>()
    const addNewPost = () => {
        addPost()
    }
    const onChangePost = () => {
        let text = newElementPost.current?.value
        updateNewPostText(text as string)
    }
    return (
        <MyPostsStyled>
            My Posts
            <div>
                <div>
                    <textarea
                        onChange={onChangePost}
                        ref={newElementPost} value={props.newPostText}/>
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