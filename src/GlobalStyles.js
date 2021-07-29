import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --maxWidth: 1280px;
        --fontUltraBig: 3.5rem;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
        --white: #ffff;
        --redColor: #BC2B29;
        --blueColor: #0C1F2D
    }

    *{

        background: var(--blueColor);
        box-sizing: border-box;
        font-family: 'Sora', san-sarif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #ffff;
    }

`;