import styled from "styled-components";

interface IProps {
    prime: boolean
}

export const Wrapper = styled.div`
    position: relative;
    
    
    .previous {
        left: -2rem
    }
    
    .next {
        right: -2rem
    }
`

export const StoryContainer = styled.div<IProps>`
    position: relative;
    width: ${props => props.prime ? '336px' : '134px'};
    height: ${props => props.prime ? '90vh' : '239px'}; 
    background: black;
    transition: all .2s ease-in-out;
`

export const Btn = styled.div`
    z-index: 50000;
    position: absolute;
    width: 30px;
    height: 30px;
    background: blue;
    color: white;
    top: 50%;
`

export const IntervalContainer = styled.div`
    width: 100%;
    position: relative;
    top: 5px;
    display: flex;
    height: 2px;
    justify-content: space-between
`