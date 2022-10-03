import React from 'react'
import {MessageItemStyled} from './messages.styled';

type PropsType = {
    content: string,
};

export function ItemMessage({content}: PropsType) {
    return (
        <MessageItemStyled>
            {content}
        </MessageItemStyled>
    )
}