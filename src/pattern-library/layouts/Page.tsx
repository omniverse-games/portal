import * as React from "react";
import styled from "styled-components/macro";
import { CenteredContainer, Container } from "../containers/Containers";

export interface PageProps {}

export const Page: React.FunctionComponent = ({ children }) => {
  return <Container>{children}</Container>;
};
