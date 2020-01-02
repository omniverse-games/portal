import * as React from "react";
import styled from "styled-components/macro";
import { CenteredContainer } from "../containers/Containers";

export interface PageProps {}

export const Page: React.FunctionComponent = ({ children }) => {
  return (
    <CenteredContainer>
      <div>{children}</div>
    </CenteredContainer>
  );
};
