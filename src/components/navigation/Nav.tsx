import * as React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { fonts } from "../../pattern-library/text/fonts";
import {
  BorderlessButton,
  buttonSizes
} from "../../pattern-library/input/Button";

interface NavSectionProps {
  isAtTop: boolean;
}
const NavSection = styled.section<NavSectionProps>`
  position: fixed;
  top: 0;
  width: 99%;
  padding: 8px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: background-color 1s;

  background-color: ${props =>
    props.isAtTop ? "transparent" : "rgb(167, 127, 182, 1)"};

  color: ${props => (props.isAtTop ? "white" : "black")};
`;

const CssLogo = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: rgb(260, 46, 65 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 7px;
`;

const AppName = styled.div`
  font-family: ${fonts.sansSerif};
  font-size: 17px;
`;

const Grow = styled.div`
  flex-grow: 1;
`;

export const Nav = () => {
  const { t } = useTranslation();
  const [isAtTop, setIsAtTop] = React.useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (currPos.y >= 0 && !isAtTop) setIsAtTop(true);
      else if (currPos.y < 0 && isAtTop) setIsAtTop(false);
    },
    [isAtTop]
  );

  return (
    <NavSection isAtTop={isAtTop}>
      <CssLogo>Ω</CssLogo>
      <AppName>{t("app.name")}</AppName>
      <Grow />
      <BorderlessButton
        size={buttonSizes.SMALL}
        onClick={() => alert("login clicked")}
      >
        {t("app.authenticate")}
      </BorderlessButton>
    </NavSection>
  );
};
