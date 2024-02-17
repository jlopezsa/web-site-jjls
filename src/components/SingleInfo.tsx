import styled from "styled-components";
import { FNT } from './Fonts';
import { colors } from '../styles/globalStyles';

const SI = {
  Container: styled.section`
    /* background-color: ${colors.bc2}; */
    margin-top: 0px;
    margin-bottom: 0px;
  `,
}

type InfoProps = {
  title: string,
  description: string,
}

function SingleInfo(props: InfoProps) {
  const { title, description } = props;
  return (
    <SI.Container >
      <FNT.H5Title>{title}</FNT.H5Title>
      <FNT.BODY>{description}</FNT.BODY>
    </SI.Container>
  )
}

export default SingleInfo
