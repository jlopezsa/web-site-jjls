import styled from "styled-components";
import { colors, fontsDesktop } from "../styles/globalStyles";

type InfoProps = {
  title: string,
  description: string,
  colorText: string,
}

const GC = {
  Container: styled.div`
  height: 250px;
  width: 180px;
  display: block;
  position: relative;
  &:hover{
    padding-top: 5px;
    transition: 500ms;
  }
  `,
  ContainerImg: styled.div`
    height: 250px;
    box-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
    width: 180px;
    background-color: ${colors.bc5};
    border-radius: 15px;
    background-image: url(https://res.cloudinary.com/parkingapp/image/upload/v1656216772/HomePagePic/software-developer-g3b9e20465_640_wygfgt.jpg);
    background-repeat: no-repeat;
    background-position: 50% 50%;
    opacity: 0.5;
    display: block;
    position: absolute;
    &:hover{
      opacity: 0.1;
      transform: scale(0.95);
      transition: 500ms;
    }
    `,
  BodyTitle: styled.h5<InfoProps>`
    height: auto;
    font-size: ${fontsDesktop.body1Desktop};
    text-align: left;
    /* color: ${colors.wc0}; */
    color: ${(p: InfoProps) => p.colorText};
    margin-top: 20px;
    margin-bottom: 0px;
    margin-left: 10px;
    `,
  BodyContent: styled.h5`
    font-size: ${fontsDesktop.captionDesktop};
    font-weight: lighter;
    text-align: left;
    color: ${colors.wc0};
    margin-top: 50px;
    margin-bottom: 0px;
    margin-left: 10px;
  `,
}

function GlobalCard(props: InfoProps) {
  const { title, description } = props;
  return (
    <GC.Container>
      <GC.ContainerImg>
        {/* <GC.Img src={urlFig} alt="jjls" /> */}
      </GC.ContainerImg>
      <GC.BodyTitle>
        {title}
      </GC.BodyTitle>
      <GC.BodyContent>
        {description}
      </GC.BodyContent>
    </GC.Container>
  )
}

export default GlobalCard
