import React from 'react';
import { PostreData } from './dataPostre';
import {
    PostreContainer,
    PostreHeaading,
    PostreWraper,
    PostreCard,
    PostreImg,
    PostreInfo,
    PostreTitle,
    PostreDesc,
    PostrePrice,
    PostreButton,
  } from "./postreElements";

const Postres = ({data}) => {
    return (
        <PostreContainer>
      <PostreHeaading>Choose your best!!!</PostreHeaading>
       <PostreWraper>
        {PostreData.map((postre, index) => {
          return (
            <PostreCard key={index}>
              <PostreImg src={postre.img} alt={postre.alt} />
              <PostreInfo>
                <PostreTitle>{postre.name}</PostreTitle>
                <PostreDesc>{postre.description}</PostreDesc>
                <PostrePrice>{postre.price}</PostrePrice>
                <PostreButton>{postre.button}</PostreButton>
              </PostreInfo>
            </PostreCard>
          );
        })}
      </PostreWraper> 
    </PostreContainer>
    )
}

export default Postres
