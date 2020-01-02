import * as React from "react";
import { Page } from "../../pattern-library/layouts/Page";
import { Hero } from "../../pattern-library/containers/Hero";
import { Text } from "../../pattern-library/text/Text";

import { useTranslation } from "react-i18next";
import { Nav } from "../../components/navigation/Nav";

export const HomePage: React.FunctionComponent = () => {
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
      <Page>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ante
          in nibh mauris cursus mattis. Ultrices eros in cursus turpis massa
          tincidunt. Et malesuada fames ac turpis egestas integer eget. Justo
          nec ultrices dui sapien eget. Metus dictum at tempor commodo
          ullamcorper a. Hendrerit dolor magna eget est lorem ipsum dolor. Justo
          laoreet sit amet cursus sit. Vulputate odio ut enim blandit volutpat
          maecenas volutpat. Nam libero justo laoreet sit amet cursus. At tempor
          commodo ullamcorper a lacus vestibulum sed arcu.
        </Text>
        <Text>
          Varius vel pharetra vel turpis nunc eget lorem dolor. Ultrices gravida
          dictum fusce ut placerat orci. Senectus et netus et malesuada fames ac
          turpis egestas. Massa id neque aliquam vestibulum morbi blandit
          cursus. Enim diam vulputate ut pharetra sit amet aliquam id diam.
          Ultrices tincidunt arcu non sodales neque. Penatibus et magnis dis
          parturient montes. A lacus vestibulum sed arcu non. Sit amet
          consectetur adipiscing elit ut aliquam purus sit amet. Cursus sit amet
          dictum sit amet justo donec enim. Ac felis donec et odio pellentesque.
          Turpis tincidunt id aliquet risus feugiat in ante. Suscipit adipiscing
          bibendum est ultricies integer quis auctor elit sed. Porttitor lacus
          luctus accumsan tortor. Vitae suscipit tellus mauris a diam maecenas.
          Convallis posuere morbi leo urna molestie at elementum eu.
        </Text>
        <Text>
          Sagittis id consectetur purus ut. Pharetra sit amet aliquam id.
          Placerat duis ultricies lacus sed turpis tincidunt. Nunc vel risus
          commodo viverra maecenas accumsan. Sed enim ut sem viverra aliquet
          eget sit amet. Tincidunt lobortis feugiat vivamus at augue. Duis
          tristique sollicitudin nibh sit amet commodo nulla. Elit eget gravida
          cum sociis natoque penatibus et. Non arcu risus quis varius quam
          quisque. Lorem ipsum dolor sit amet. Ut sem nulla pharetra diam sit
          amet nisl suscipit adipiscing. Luctus venenatis lectus magna fringilla
          urna. Aenean euismod elementum nisi quis eleifend quam adipiscing
          vitae. Eros donec ac odio tempor orci. Vel quam elementum pulvinar
          etiam.
        </Text>
        <Text>
          Eget felis eget nunc lobortis mattis. Interdum varius sit amet mattis
          vulputate. Fringilla urna porttitor rhoncus dolor purus non enim
          praesent. Et ligula ullamcorper malesuada proin libero. Convallis
          posuere morbi leo urna molestie at elementum eu facilisis. In egestas
          erat imperdiet sed euismod. Amet mattis vulputate enim nulla.
          Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit
          amet. Eu sem integer vitae justo eget. Montes nascetur ridiculus mus
          mauris. Interdum posuere lorem ipsum dolor sit amet consectetur
          adipiscing. Sagittis orci a scelerisque purus semper eget duis.
          Pellentesque elit eget gravida cum. Sodales ut etiam sit amet nisl.
          Auctor urna nunc id cursus metus aliquam. Tristique nulla aliquet enim
          tortor at auctor. Est ultricies integer quis auctor elit sed. At
          tempor commodo ullamcorper a. Amet nisl suscipit adipiscing bibendum
          est ultricies integer. Vitae turpis massa sed elementum tempus egestas
          sed sed.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Sit amet
          mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Velit ut
          tortor pretium viverra suspendisse potenti. Ut sem nulla pharetra diam
          sit amet. Lectus vestibulum mattis ullamcorper velit sed ullamcorper.
          Ullamcorper eget nulla facilisi etiam dignissim diam quis enim
          lobortis. Ut sem nulla pharetra diam sit amet nisl. Molestie ac
          feugiat sed lectus vestibulum mattis. Amet cursus sit amet dictum sit.
          Dui vivamus arcu felis bibendum ut tristique et egestas. Viverra orci
          sagittis eu volutpat odio facilisis mauris. Dui id ornare arcu odio ut
          sem nulla pharetra. Auctor neque vitae tempus quam pellentesque. Massa
          massa ultricies mi quis hendrerit. Nisl suscipit adipiscing bibendum
          est ultricies integer quis auctor. Facilisi nullam vehicula ipsum a
          arcu cursus vitae congue mauris.
        </Text>
      </Page>
    </>
  );
};
