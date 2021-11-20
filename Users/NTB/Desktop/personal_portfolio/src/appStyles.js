import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *, *:before,*:after {
        box-sizing: border-box
    }

    html, body {
        padding: 0;
        margin: 0ô
        font-family: Montserrat
    }

    body {
        background: #f3f2f2;
        color: #0A3738;
    }
    
    h1,h2,h3,h4,h5,h6 {
        margin: 0
    }
    ul {
        padding: 0
    }
    li {
        list-style-type: none
    }

    a {
        text-decoration: none;
    }
`

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
`

export const Main = styled.div`
    max-width: 1230px;
    margin: 0 auto
`