/**
 * Example: Column fixed, column scroll
 * https://jsfiddle.net/j80h9qzo/1/
 */
import styled from "styled-components";
import { colors } from '../../styles/globalStyles'
import fotoJJLS from '../../images/foto_linkedin.png';

const NB = {
  ContainerNavBar: styled.div`
    width: 560px;
    height: 100vh;
    background-color: ${colors.bc4};
    position: fixed;
    display: flex;
    justify-content: center;
  `,
  Img: styled.img`
    width: 250px;
    height: 250px;
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
    </NB.ContainerNavBar>
  )
}

export default NavBar;
