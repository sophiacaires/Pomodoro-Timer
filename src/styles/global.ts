import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
    }

    body {
        background: ${(props) => props.theme['gray-900']};
        color: ${(props) => props.theme['gray-300']};
        -webkit-font-smoothing: antialiased;
    }

    html, body {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    } 

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme['gray-600']};
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: ${(props) => props.theme['gray-500']};
    }

    ::-webkit-scrollbar-track {
        background-color: ${(props) => props.theme['gray-950']};
    }

    ::-webkit-scrollbar-corner {
        background-color: ${(props) => props.theme['gray-950']};
    }
`
