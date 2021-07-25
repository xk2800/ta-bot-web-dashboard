import { createGlobalStyle } from "styled-components"; 

export const GlobalStyle = createGlobalStyle`

    :root{
        --maxWidth: 1280px;
        --fontUltraBig: 3.5rem;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    *{

        background: #0C1F2D;
        box-sizing: border-box;
        font-family: 'Sora', san-sarif;
    }

`;