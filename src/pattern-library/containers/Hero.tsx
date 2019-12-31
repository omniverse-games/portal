import * as React from "react";
import styled from "styled-components/macro";
import { Header, SubHeader } from "../text/Header";
import { Button } from "../input/Button";

const HeroSection = styled.section`
  width: 100vw;
  min-height: 400px;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  background: #654ea3; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #eaafc8,
    #654ea3
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #eaafc8,
    #654ea3
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const HeroContainer = styled.div``;

export interface HeroProps {
  title: string;
  subtitle?: string;
  cta?: string;
  action?(): void;
}
export const Hero: React.FunctionComponent<HeroProps> = ({
  title,
  subtitle,
  cta,
  action
}) => {
  return (
    <HeroSection>
      <HeroContainer>
        <Header>{title}</Header>
        {subtitle ? <SubHeader>{subtitle}</SubHeader> : undefined}
        {cta && action ? <Button onClick={action}>{cta}</Button> : null}
      </HeroContainer>
    </HeroSection>
  );
};
