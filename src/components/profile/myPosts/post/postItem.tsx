import React from 'react'
import {PotItemStyled} from "./potItem.styled";

type PropsType = {
    content: string,
    likesCount:number,
    srcImage:string
};
export function PostItem  ({content,likesCount,srcImage}:PropsType)  {
  return (

        <div>
          <div>
              <img src={srcImage} style={{width:"50px"}}/>
              {content}
              <span>Likes </span>{likesCount}
          </div>

        </div>

  )
}