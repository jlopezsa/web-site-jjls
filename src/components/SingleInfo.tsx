import styled from "styled-components";
import { FNT } from "./Fonts";
import { colors } from "../styles/globalStyles";

const Si = {
  container: styled.section`
    /* background-color: ${colors.bc2}; */
    margin-top: 0px;
    margin-bottom: 0px;
  `,
};

type InfoProps = {
  title: string;
  description: string;
};

const SingleInfo = (props: InfoProps) => {
  const { title, description } = props;
  return (
    <Si.container>
      <FNT.H5Title>{title}</FNT.H5Title>
      <FNT.BODY>{description}</FNT.BODY>
    </Si.container>
  );
};

export default SingleInfo;
