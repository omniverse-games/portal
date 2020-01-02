import * as React from "react";
import styled from "styled-components/macro";
import { Header, SubHeader } from "../text/Header";
import { PrimaryButton, buttonSizes } from "../input/Button";

const HeroSection = styled.section`
  width: 100%;
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
const HeroHeader = styled(Header)`
  font-size: 48px;
  margin: 10px;
  text-shadow: 1px 1px 1px #654ea3;
`;
const HeroSubHeader = styled(SubHeader)`
  font-size: 20px;
  margin: 10px;
  text-shadow: 1px 1px 1px #654ea3;
`;
const HeroButton = styled(PrimaryButton)`
  margin-top: 20px;
`;

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
        <HeroHeader>{title}</HeroHeader>
        {subtitle ? <HeroSubHeader>{subtitle}</HeroSubHeader> : undefined}
        {cta && action ? (
          <HeroButton size={buttonSizes.LARGE} onClick={action}>
            {cta}
          </HeroButton>
        ) : null}
      </HeroContainer>
    </HeroSection>
  );
};
