import React from 'react'
import { ContainerUserCard, ContainerUserCardHeader, TextIconUserCard, WrapperEditUserBtn, WrapperIconUserCard, WrapperUserBtn } from './UserCard.styled'
import Icon from '../Icon/Icon'

export const UserCard = () => {
  return (
    <ContainerUserCard>
        <ContainerUserCardHeader>
            <WrapperUserBtn>
                <TextIconUserCard>User</TextIconUserCard>
                <WrapperIconUserCard >
                    <Icon height={18} width={18} name="user-card" />
                </WrapperIconUserCard>
            </WrapperUserBtn>
            <WrapperEditUserBtn>
            <Icon height={18} width={18} name="edit-card" />
            </WrapperEditUserBtn>
        </ContainerUserCardHeader>
        UserCard
        </ContainerUserCard>
  )
}

