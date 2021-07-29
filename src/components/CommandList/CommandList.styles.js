import styled from "styled-components";
import { Colors } from "../../constants";

export const Wrapper = styled.div`
  /* max-width: 1280px; */
  padding: 10px 16px;
  margin: 20px 500px;
  border: 1px solid #fafafa;
  text-align: left;

  h3 {
    font-size: 20px;
    color: ${Colors.Primary};
    margin-bottom: 8px;
  }

  .short_text {
    color: ${Colors.White};
    font-weight: 100;
  }

  code {
    font-size: 20px;
    color: ${Colors.Primary};
    margin-bottom: 8px;
  }
`;

export const Content = styled.div`
  color: var(--white);

  p {
    margin: 10px 0;
  }

  .code {
    background: ${Colors.Blue};
    padding: 5px 0;
    padding-left: 5px;
    border-radius: 10px;
  }
`;
