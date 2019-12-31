import * as React from "react";
import styled from "styled-components/macro";

export const Container = styled.div`
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

export interface PageProps {}

export const Page: React.FunctionComponent = ({ children }) => {
  return (
    <Container>
      <div>{children}</div>
    </Container>
  );
};
