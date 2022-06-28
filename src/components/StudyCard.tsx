import styled from "styled-components";
import { colors, fontsDesktop } from '../styles/globalStyles';

type InfoProps = {
  title: string,
  university: string,
  local: string,
  year: number,
  urlLogo: string,
}

const SC = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 100px;
    padding: 20px 10px;
    background-color: ${colors.bc4};
    border-radius: 5px;
  `,
  BODY: styled.p`
  font-size: ${fontsDesktop.body1Desktop};
  text-align: left;
  color: ${colors.wc1};
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  font-weight: bold;
  `,
  Caption: styled.p`
  font-size: ${fontsDesktop.captionDesktop};
  text-align: left;
  color: ${colors.wc1};
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  font-weight: lighter;
  `,
  Img: styled.img`
    height: 80px;
    width: 80px;
    object-fit: cover;
    border-radius: 5px;
  `,
};

function StudyCard(props: InfoProps) {
  const { title, university, local, year, urlLogo } = props;
  return (
    <SC.Container>
      <div>
        <SC.BODY>{title}</SC.BODY>
        <SC.Caption>{university}</SC.Caption>
        <SC.Caption>{local}</SC.Caption>
        <SC.Caption>{year}</SC.Caption>
      </div>
      <div>
        <SC.Img src={require(`../images/${urlLogo}`)} alt="university-img" />
      </div>
    </SC.Container>
  )
}

export default StudyCard;
