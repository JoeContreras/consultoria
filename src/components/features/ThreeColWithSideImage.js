import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({
  cards = null,
  heading = "Amazing Features",
  subheading = "Features",
  description = "Las empresas que logren adoptar una estrategia digital adecuada en respuesta a la crisis, pueden reducir significativamente su exposici??n y aprovechar las oportunidades derivadas de las condiciones actuales.",
}) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: ShieldIconImage,
      title: "Seguro",
      description:
        " Security Operations Center (evaluaci??n y an??lisis de brechas de seguridad para cumplir con PCI, ITIL, ISO 27001, u otros est??ndares nacionales e internacionales).",
    },
    {
      imageSrc: SupportIconImage,
      title: "24/7 Soporte",
      description:
        "Te acompa??amos a navegar los desaf??os de este panorama tecnol??gico, enfocados a lograr sus objetivos de negocio, desde la estrategia hasta la ejecuci??n",
    },
    {
      imageSrc: CustomizeIconImage,
      title: "Personalizado",
      description:
        "Estudios de soluciones de software y hardware espec??ficas seg??n las necesidades del cliente. Conformaci??n y desarrollo de soluciones para Centros de Datos.",
    },
    {
      imageSrc: ReliableIconImage,
      title: "Confiable",
      description:
        "Dise??o e implementaci??n de planes de concientizaci??n de usuarios. An??lisis de riesgos de la infraestructura de TI e impacto en el negocio.",
    },
    {
      imageSrc: FastIconImage,
      title: "Rapido",
      description:
        "Nuestra experiencia combinada en estrategia, negocios, tecnolog??a, riesgos y seguridad le ayuda a potenciar los conocimientos sobre c??mo la nube puede transformar su negocio",
    },
    {
      imageSrc: SimpleIconImage,
      title: "Facil",
      description:
        "Desarrollo e implementaci??n de Planes de Recuperaci??n ante Desastres, Planes de Continuidad del Negocio, Planes de Emergencia y Planes de Contingencia.",
    },
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description ||
                    "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
