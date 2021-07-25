import styled from "styled-components";

export const Wrapper = styled.div`
    color: #ffff;
    padding: 20px 0;
    

    h2, p, a{
        margin: 20px 0;
    }

    h2{
        font-size: var(--fontUltraBig);
    }

    p{
        font-size: var(--fontSuperBig);
    }

    a, a:link{
        font-size: var(--fontBig);
        color: #ffff;
        border: 1px solid red;
        padding: 10px 15px;
        border-radius: 25px;
        text-decoration: none;
        background-color: #BC2B29;
    }

    a:hover{
        background-color: #752827;
        border-color: #752827;
        color: #bfbfbf;
    }
`;