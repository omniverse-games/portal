import * as React from "react";
import { useTranslation } from "react-i18next";
import { RouteComponentProps } from "@reach/router";

import {
  Container,
  ContainerWidth
} from "../../pattern-library/containers/Containers";
import { Hero } from "../../pattern-library/containers/Hero";

import { Nav } from "../../components/navigation/Nav";
import { ProductFeature } from "../../components/features/ProductFeature";
import onlineImg from "../../components/features/undraw_ninja_e52b.png";
import customizeImg from "../../components/features/undraw_playing_cards_cywn.png";
import socialImg from "../../components/features/undraw_post_online_dkuk.png";
import shipImg from "../../components/features/undraw_add_to_cart_vkjp.png";

export const HomePage: React.FunctionComponent<RouteComponentProps> = () => {
  const { t } = useTranslation();
  return (
    <>
      <Nav />
      <Hero
        title={t("homepage.title")}
        subtitle={t("homepage.subtitle")}
        cta={t("homepage.cta")}
        action={() => alert("clicked")}
      ></Hero>
      <Container containerWidth={ContainerWidth.MEDIUM}>
        <ProductFeature
          image={customizeImg}
          imageAlt="Customize"
          description={t("homepage.features.customize")}
        />
        <ProductFeature
          image={onlineImg}
          imageAlt="Play Online"
          description={t("homepage.features.online")}
          imagePosition="right"
        />
        <ProductFeature
          image={shipImg}
          imageAlt="Fork"
          description={t("homepage.features.ship")}
        />
        <ProductFeature
          image={socialImg}
          imageAlt="Social"
          description={t("homepage.features.social")}
          imagePosition="right"
        />
      </Container>
    </>
  );
};
