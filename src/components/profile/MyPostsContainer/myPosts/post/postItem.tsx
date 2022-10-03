import React from 'react'

type PropsType = {
    content: string,
    likesCount:number,
    srcImage:string
};
export function PostItem  ({content,likesCount,srcImage}:PropsType)  {
  return (

        <div>
          <div>
              <img src={srcImage} style={{width:"50px"}} alt={''}/>
              {content}
              <span>Likes </span>{likesCount}
          </div>

        </div>

  )
}