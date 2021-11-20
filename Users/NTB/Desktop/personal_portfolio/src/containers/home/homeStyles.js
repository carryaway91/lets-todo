import styled, { keyframes } from "styled-components";


const hiAnimation = keyframes`
    0% { opacity: 0}
    100% { opacity: 1}
`

const introAnimation = keyframes`
0% { width: 0
}
100% { width: 100% }
`

const additionalAnimation = keyframes`
    0% { height: 0 }
    100% { height: 100px}
`
const additionalAnimationMobile = keyframes`
0% { height: 0 }
100% { height: 32px}
`

const ProfilePicAnimation = keyframes`
    0% { opacity: 0 }
    100% { opacity: 1 }
`
const LinkAnimation = keyframes`
    0% { opacity: 0 }
    100% { opacity: 100% }
`


export const Container = styled.div`
max-width: 1000px;
height: 80vh;
display: flex;
flex-direction: column;
margin: 0 auto;
color: #4e2d20;
`

export const HomeContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media(max-width: 530px) {
        flex-direction: column;
        justify-content: center;
        align-items: center
    }

    @media(min-width: 1400px) {
        margin-top:5rem
    }
`

export const LeftWrapper = styled.div`
    flex: 2;
    margin: 5rem 0 0 2rem;

    @media(max-width: 530px) {
        margin: 0;
        padding: 0 1rem
    }

`

export const MainTitleContainer = styled.div`
overflow: hidden;
display: inline-block;
`

export const MainTitle = styled.h1`
    display: inline-block;
    font-size: 5rem;
    color: 4e2d20;
    overflow: hidden;
    animation: ${introAnimation} 2s;
    text-overflow: clip;
    white-space: nowrap;
    @media (max-width: 860px) {
        font-size: 3rem
    }
`

export const Hi = styled.p`
    margin: 0;
    animation: ${hiAnimation} 1s;

    `
    
    export const Additional = styled.div`
    overflow: hidden;
    animation: ${additionalAnimation} 2s;
    @media (max-width: 530px) {
        animation : ${additionalAnimationMobile} 1s
    }
`

export const RightPanel = styled.div`
    flex: 1;
    position: relative
`

export const Circle = styled.div`
    position: absolute;
    border-radius: 50%;
    background: red;
    width: 500px;
    height: 500px;
    top: 0
`

export const PhotoContainer = styled.div`
    position: relative;
    right: 1rem;
    width: 350px;
    height: 350px;
    border-radius: 100%;
    background-color: #fbb79c;
    overflow: hidden;
    animation: ${ProfilePicAnimation} 1.5s;

    @media (max-width: 660px) {
        margin-top: 2rem;
        width: 200px;
        height: 200px;
    }

    @media(max-width: 530px) {
        right: 0
    }
`

export const ProfilePic = styled.img`
object-fit: contain;
width: 300px;
position: relative;
left:2rem;
@media (max-width: 660px) {
    width: 250px;
    height: 250px;
    left: -1rem
}

`

export const Links = styled.div`
    display: flex;
    justify-content: space-bewteen;
    position: relative;
    top: 3rem;
    justify-content: end;
    animation: ${LinkAnimation} 1s;

    @media(max-width: 530px) {
        flex-direction: column
    }
`

export const Link = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    color: #4e2d20;

    img {
        margin-right: .5rem
    }

    @media(max-width: 530px) {
        margin-bottom: .7rem
    }
`