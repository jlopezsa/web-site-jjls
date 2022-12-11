/**
 * Example: Column fixed, column scroll
 * https://jsfiddle.net/j80h9qzo/1/
 */
import styled from "styled-components";
import { colors } from '../../styles/globalStyles';
import { FNT } from '../Fonts';
import fotoJJLS from '../../images/foto_linkedin.png';
import Menu from "../Menu";

const NB = {
  ContainerNavBar: styled.div`
    width: 400px;
    height: 100vh;
    background-color: ${colors.bc4};
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Img: styled.img`
    width: 150px;
    height: 150px;
    padding-top: 50px;
    object-fit: cover;
    object-position: -10% 20%;
    border-radius: 50%;
  `,
}

function NavBar() {
  return (
    <NB.ContainerNavBar>
      <NB.Img src={fotoJJLS} alt="jjls" />
      <FNT.H3>Julián López</FNT.H3>
      <FNT.H5>&lt; jlopezsa &gt;</FNT.H5>
      <Menu />
    </NB.ContainerNavBar>
  )
}

export default NavBar;
