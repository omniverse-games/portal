import styled from "styled-components/macro";

export const CenteredContainer = styled.div`
  display: flex;
  layout: row;
  align-items: top;
  justify-content: center;
  height: 100%;
  width: 100%;
  > :first-child {
    max-width: 1080px;
    width: 100%;
    background-color: white;
  }
`;
