import styled from 'styled-components';

export const ProductContainer = styled.div`
width: 100vw;
min-height: 100vh;
background: #150f0f;
color: #fff;
`

export const ProductWraper = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
margin: 0 auto;
`

export const ProducCard = styled.div` 
margin: 0 2rem;
line-height: 2;
width: 300px;
`

export const ProductImg = styled.img`
height: 300px;
min-width: 300px;
max-width: 100%;
box-shadow: 8px 8px #fdc500;
`

export const ProcductsHeaading = styled.h1`
font-size: clamp(2rem, 2.5vw, 3rem);
text-align: center;
margin-bottom: 2rem;
`

export const ProductInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2rem;
`
export const ProductTitle = styled.h2`
font-weight: 400;
font-size: 2rem;
margin-top: 0.5rem;
`
export const ProductDesc = styled.p`
margin-bottom: 1rem;
`

export const ProductPrice = styled.div`
font-size: 2rem;
margin-bottom: 1rem;
`

export const ProductButton = styled.button` 
font-size: 1rem;
padding: 1rem 4rem;
border: none;
background: #e31837;
color: #fff;
transition: 0.2s ease-out;

&:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
}

`