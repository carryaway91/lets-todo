import styled, { keyframes } from "styled-components";


const imgAnimation = keyframes`
0% {
    opacity: 0
}
100% {
    opacity: 1
}
`

const titleAnimation = keyframes`
    0% { height: 0 }
    100% { height: 70px }
`
const descriptionAnimation = keyframes`
    0% { opacity: 0},
    100% { opacity: 1}
`


export const Container = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: ${props => props.right ? 'row-reverse' : 'row'};
    width: 80%;
    margin-bottom: 5rem;
    justify-content: space-between;
    padding: 1rem; 
    transition: all .3s ease-in-out;
    border-radius: 1rem;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 5px 10px 3px #0a3738
    }

    h1 {
        color: #0A3738;
        margin: 0
    }

    @media(max-width: 780px) {
        flex-direction: column-reverse;
        align-items: center
    }
`

export const Description = styled.div`
    margin-left: ${props => props.margin ? '0' : '1rem'};
    margin-right: ${props => props.margin ? '1rem' : 0};
    display: flex;
    flex-direction: column;

    strong {
        color: black
    }
    h1 {
        position: relative;
        top: -1rem;
        overflow: hidden;
        animation: ${titleAnimation} 1s;
        line-height: 70px;
    }

    .inner {
        overflow: hidden;
        animation: ${descriptionAnimation} 3s;
        color: #0a3738;
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between
    }

`
export const ImgHolder = styled.div`
    max-width: 400px;
    background: black;
    animation: ${imgAnimation} 2s
`


export const Img = styled.img`
    object-fit: contain;
    width: 100%;
    height: 100%;
`

export const BtnHolder = styled.li`
    display: inline-block;
    position: relative;
    
    &:before {
        content: '';
        width: 0%;
        height: 4px;
        background: #0a3738;
        position: absolute;
        bottom: -.5rem;
        transition: all .1s ease-in-out;
        border-radius: 1rem;
    }

    &:hover {
        &:before {
            width: 30%
        }
    }
`

export const Button = styled.a`
    color: #0a3738;
    font-weight: bold
`