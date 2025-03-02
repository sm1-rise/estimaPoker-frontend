import { createGlobalStyle } from "styled-components";
import {styled} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        
    }
    
    body{
        background: #F2F2F2;
        padding: 0;
        margin: 0;
        font-family: 'Raleway', sans-serif;
    }
`

export const GlobalMain = styled.main`
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    margin-top: 130px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
`
