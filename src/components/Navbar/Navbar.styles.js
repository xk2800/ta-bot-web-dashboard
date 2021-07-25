import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 20px;
    position: relative;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
    margin: 0 auto;

    h1{
        display: right;
        color: #ffff;
    }

    .links{
        margin-left: auto;
    }

    a{
        margin-left: 16px;
        text-decoration: none;
        padding: 6px;
        color: #ffff;
    }

    a:hover{
        color: grey;
    }

`;

export const Tags = styled.div`
    .navbar{
        /* display: flex; */
        /* max-width: 600px; */
    }
`;

export const LogoImg = styled.img`
    height: 100px;

`;