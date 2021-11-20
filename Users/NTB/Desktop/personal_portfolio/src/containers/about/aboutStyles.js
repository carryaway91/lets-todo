import styled, { keyframes } from "styled-components";

const titleAnimation = keyframes`
    0% { height: 0 }
    100% { height: 43px }
`

const aboutMeAnimation = keyframes`
    0%{ opacity: 0}
    100% { opacity: 1}
`
export const Container = styled.div`

.inner {
    display: flex;
    
    @media(max-width: 680px) {
        flex-direction: column;
        justify-content: center;
        align-items: center
    }
    @media(min-width: 1400px) {
        margin-top:5rem
    }
}
`

export const PhotoHolder = styled.div`
    animation: ${aboutMeAnimation} 2s;

    img {
        width: 400px;
        margin: 0 1rem 0 2rem;

        @media(max-width: 680px) {
            margin: 0
        }
        @media(max-width: 610px) {
            width: 300px
        }
        @media(max-width: 310px) {
            width: 200px
        }
        
       
    }    
`

export const Title = styled.h1`
    overflow: hidden;   
    padding: 0 1rem;
    animation: ${titleAnimation} 1s
`

export const AboutMe = styled.div`
    p {
        font-style: italic;
        padding: 0 1rem
    };

    animation: ${aboutMeAnimation} 2s;
`   
