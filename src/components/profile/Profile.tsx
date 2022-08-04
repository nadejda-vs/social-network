import {ProfileStyled} from "./profile.styled";
import {MyPosts} from "./myPosts/MyPosts";


export function Profile  ()  {
  return (
      <ProfileStyled>
        <img src='image1.jpg' style={{width:"500px"}}/>
          <h4>My name is Nadejda.</h4>
    <MyPosts />
      </ProfileStyled>
  )
}