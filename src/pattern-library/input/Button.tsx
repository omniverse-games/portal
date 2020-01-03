import styled from "styled-components/macro";
import { fonts } from "../text/fonts";

export enum buttonSizes {
  SMALL = "SMALL",
  SMALL_WIDE = "SMALL_WIDE",
  MEDIUM = "MEDIUM",
  MEDIUM_WIDE = "MEDIUM_WIDE",
  LARGE = "LARGE",
  NEW_MEDIUM = "NEW_MEDIUM"
}

const paddingObject: { [index: string]: string } = {
  [buttonSizes.SMALL]: "8px 12px",
  [buttonSizes.SMALL_WIDE]: "8px 60px",
  [buttonSizes.MEDIUM]: "10px 25px",
  [buttonSizes.NEW_MEDIUM]: "10px 25px",
  [buttonSizes.MEDIUM_WIDE]: "9px 30px",
  [buttonSizes.LARGE]: "20px 50px"
};

const spacingObject: { [index: string]: string } = {
  [buttonSizes.SMALL]: "0.5px",
  [buttonSizes.SMALL_WIDE]: "0.2px",
  [buttonSizes.MEDIUM]: "1px",
  [buttonSizes.NEW_MEDIUM]: ".18px",
  [buttonSizes.MEDIUM_WIDE]: "0.2px",
  [buttonSizes.LARGE]: "3px"
};

const fontObject: { [index: string]: string } = {
  [buttonSizes.SMALL]: "12px",
  [buttonSizes.MEDIUM]: "18px",
  [buttonSizes.NEW_MEDIUM]: "12px",
  [buttonSizes.MEDIUM_WIDE]: "14px",
  [buttonSizes.LARGE]: "24px"
};

export interface ButtonProps {
  size: buttonSizes;
}

export const Button = styled.button<ButtonProps>`
  text-decoration: none;
  border-radius: 3px;
  padding: ${(props: any) => paddingObject[props.size || buttonSizes.LARGE]};
  font-family: ${fonts.sansSerif};
  cursor: pointer;
  border: none;
  letter-spacing: ${(props: any) =>
    spacingObject[props.size || buttonSizes.LARGE]};
  font-size: ${(props: any) => fontObject[props.size || buttonSizes.LARGE]};
  transition: color 500ms, background-color 500ms, border-color 500ms;
  outline: none;
  display: inline-block;
  ${(props: any) => (props.width ? `width: ${props.width}px;` : "")};
  ${(props: any) => (props.fullWidth ? "width: 100%;" : "")};
`;

export const PrimaryButton = styled(Button)`
  background-color: #654ea3;
  border: 1px solid white;
  color: white;
`;

export const SecondaryButton = styled(Button)`
  border: none;
  background-color: #eaafc8;
`;

export const BorderlessButton = styled(Button)`
  border: none;
  background-color: transparent;
  color: inherit;
`;
