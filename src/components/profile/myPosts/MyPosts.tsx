import {MyPostsStyled} from "./myPosts.styled";
import {PostItem} from "./post/postItem";


export function MyPosts  ()  {
  return (
      <MyPostsStyled>My Posts

        <div>
          <textarea ></textarea>
          <button>Add new Post</button>
        </div>
        <div>
         <PostItem />
        </div>
      </MyPostsStyled>
  )
}