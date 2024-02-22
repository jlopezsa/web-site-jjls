/**
 * https://codepen.io/creativemanner/pen/NWrNWrd
 */

import styled from "styled-components";
import { colors, fontsDesktop } from "../styles/globalStyles";

type InfoProps = {
  title: string;
  description: string;
  urlFig: string;
};

const GC = {
  container: styled.div`
    height: 250px;
    width: 180px;
    display: block;
    position: relative;
    &:hover {
      padding-top: 5px;
      transition: 500ms;
    }
  `,
  containerImg: styled.div`
    height: 250px;
    box-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
    width: 180px;
    background-color: ${colors.bc5};
    opacity: 0.5;
    display: block;
    position: absolute;
    border-radius: 10px;
    &:hover {
      opacity: 0.1;
      transform: scale(0.95);
      transition: 500ms;
    }
  `,
  bodyTitle: styled.h5`
    height: auto;
    font-size: ${fontsDesktop.body1Desktop};
    text-align: left;
    color: ${colors.wc0};
    margin-top: 20px;
    margin-bottom: 0px;
    margin-left: 10px;
  `,
  bodyContent: styled.h5`
    font-size: ${fontsDesktop.body1Desktop};
    font-weight: lighter;
    text-align: left;
    color: ${colors.wc0};
    margin-top: 50px;
    margin-bottom: 0px;
    margin-left: 10px;
    font-weight: bold;
  `,
  img: styled.img`
    height: 250px;
    width: 180px;
    object-fit: cover;
    object-position: 10% 20%;
    border-radius: 10px;
  `,
};

function GlobalCard(props: InfoProps) {
  const { title, description, urlFig } = props;
  return (
    <GC.container>
      <GC.containerImg>
        <GC.img src={require(`../../src/images/${urlFig}`)} alt="image-sw" />
      </GC.containerImg>
      <GC.bodyTitle>{title}</GC.bodyTitle>
      <GC.bodyContent>{description}</GC.bodyContent>
    </GC.container>
  );
}

export default GlobalCard;
