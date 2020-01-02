import * as React from "react";
import styled from "styled-components/macro";

export enum ContainerWidth {
  NARROW = "NARROW",
  MEDIUM = "MEDIUM",
  WIDE = "WIDE"
}

export interface CenteredContainerProps {
  containerWidth: ContainerWidth;
}
export const CenteredContainer = styled.div<CenteredContainerProps>`
  display: flex;
  layout: row;
  align-items: top;
  justify-content: center;
  height: 100%;
  width: 100%;
  > :first-child {
    max-width: ${props => getWidthPixels(props)};
    width: 100%;
    background-color: white;
  }
`;

function getWidthPixels(props: CenteredContainerProps): string {
  switch (props.containerWidth) {
    case ContainerWidth.NARROW:
      return "360px";
    case ContainerWidth.MEDIUM:
      return "720px";
    case ContainerWidth.WIDE:
      return "1080px";
    default:
      return "360px";
  }
}

export interface ContainerProps {
  containerWidth?: ContainerWidth;
}

export const Container: React.FunctionComponent<ContainerProps> = ({
  children,
  containerWidth
}) => {
  console.log("cookie puss", containerWidth);
  return (
    <CenteredContainer containerWidth={containerWidth || ContainerWidth.MEDIUM}>
      <div>{children}</div>
    </CenteredContainer>
  );
};
