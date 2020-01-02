import * as React from "react";
import styled from "styled-components";
import { FeaturedText } from "../../pattern-library/text/Text";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Description = styled(FeaturedText)`
  flex-grow: 1;
`;
const Image = styled.img`
  height auto;
  max-width: 45%;
`;

export interface ProductFeatureProps {
  image: string;
  imageAlt: string;
  description: string;
  imagePosition?: "left" | "right";
}
export const ProductFeature: React.FunctionComponent<ProductFeatureProps> = ({
  description,
  image,
  imageAlt,
  imagePosition
}) => {
  const imageEl = <Image src={image} alt={imageAlt}></Image>;
  const descriptionEl = <Description>{description}</Description>;

  if (imagePosition === "right") {
    return (
      <Container>
        {descriptionEl}
        {imageEl}
      </Container>
    );
  }

  return (
    <Container>
      {imageEl}
      {descriptionEl}
    </Container>
  );
};
