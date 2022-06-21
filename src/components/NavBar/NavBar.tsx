/**
 * Example: Column fixed, column scroll
 * https://jsfiddle.net/j80h9qzo/1/
 */
import styled from "styled-components";
import { colors } from '../../styles/globalStyles'

const NB = {
  ContainerNavBar: styled.div`
    width: 560px;
    height: 100vh;
    background-color: ${colors.bc4};
    position: fixed;
  `,
}

function NavBar() {
  return (
    <NB.ContainerNavBar>
        jlopezsa
    </NB.ContainerNavBar>
  )
}

export default NavBar;
