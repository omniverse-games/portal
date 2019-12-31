import * as React from "react";
import styled from "styled-components/macro";
import { Header } from "../text/Header";

const HeroContainer = styled.div`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100wh;
`;

const HeroHeader = styled(Header)``;

export interface HeroProps {
  title: string;
}
export const Hero: React.FunctionComponent<HeroProps> = ({ title }) => {
  return (
    <HeroContainer>
      <HeroHeader>{title}</HeroHeader>
    </HeroContainer>
  );
};
