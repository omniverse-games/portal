import styled from "styled-components/macro";
import { fonts } from "./fonts";

export const Header = styled.h1`
  font-family: ${fonts.sansSerif};
  color: white;
  font-size: 32px;
  font-weight: 700;
`;

export const SubHeader = styled(Header)`
  font-size: 12px;
`;
