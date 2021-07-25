import styled from "styled-components";

export const Wrapper = styled.div`
    /* max-width: 1280px; */
    padding: 10px 16px;
    margin: 20px 500px;
    border: 1px solid #fafafa;
    text-align: left;
    

    h3{
        font-size: 20px;
        color: #BC2B29;
        margin-bottom: 8px;
    }

    .short_text{
        color: #ffff;
        font-weight: 100;
    }

`;

export const Content = styled.div`
    color: #ffff;
    
    p{
        margin: 10px 0;
    }

    .code{
        background: #1a425e;
        padding: 5px 0;
        padding-left: 5px;
        border-radius: 10px;
    }
`;