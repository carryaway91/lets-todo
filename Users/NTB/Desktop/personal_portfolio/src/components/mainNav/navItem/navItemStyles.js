import styled from "styled-components";

export const Item = styled.li`
    display: flex;
    align-items: center;
    position: relative;
    margin: 0 2rem;
    text-transform: uppercase;
    font-family: Montserrat;
    font-weight: 600;
    
    @media(max-width: 430px) {
        margin: 0 .4rem
    }

    a {
        color: #cb9b87;
        display: block;
        height: 100%;
        display: flex;
        align-items: center;
        font-size: .9rem;
        padding: 1rem 0
    }

    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        width: 0%;
        height: 4px;
        border-radius: 1rem;
        background: #0A3738;
        transition: all .1s ease-in-out;
    }
   
    &:hover {
        cursor: pointer;
        &:before {
            width: 30%
        }
    }
    `

    export const activeLink = {
        color: '#0A3738'
    }