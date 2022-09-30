import React from 'react'
import {UserNameStyled} from "./userName.styled";
import {NavLink} from 'react-router-dom';

type PropsType = {
    id: string,
    nameUser: string,
};

export function UserName({nameUser, id}: PropsType) {
    return (
        <UserNameStyled>
            <NavLink to={`/messages/${id}`}>
                {nameUser}
            </NavLink>
        </UserNameStyled>
    )
}