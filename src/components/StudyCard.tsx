import styled from "styled-components";
import { colors, fontsDesktop } from "../styles/globalStyles";

type InfoProps = {
  title: string;
  university: string;
  local: string;
  year: number;
  urlLogo: string;
};

const SC = {
  container: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 100px;
    padding: 20px 10px;
    background-color: ${colors.bc4};
    border-radius: 5px;
  `,
  body: styled.p`
    font-size: ${fontsDesktop.body1Desktop};
    text-align: left;
    color: ${colors.wc1};
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    font-weight: bold;
  `,
  caption: styled.p`
    font-size: ${fontsDesktop.captionDesktop};
    text-align: left;
    color: ${colors.wc1};
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    font-weight: lighter;
  `,
  img: styled.img`
    height: 80px;
    width: 80px;
    object-fit: cover;
    border-radius: 5px;
  `,
};

const StudyCard = (props: InfoProps) => {
  const { title, university, local, year, urlLogo } = props;
  return (
    <SC.container>
      <div>
        <SC.body>{title}</SC.body>
        <SC.caption>{university}</SC.caption>
        <SC.caption>{local}</SC.caption>
        <SC.caption>{year}</SC.caption>
      </div>
      <div>
        <SC.img src={require(`../images/${urlLogo}`)} alt="university-img" />
      </div>
    </SC.container>
  );
};

export default StudyCard;
