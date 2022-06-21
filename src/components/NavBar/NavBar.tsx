import styled from "styled-components";

const NB = {
  ContainerNavBar: styled.div`
    background-color: red;
  `,
}

function NavBar() {
  return (
    <NB.ContainerNavBar>
        NavBar
    </NB.ContainerNavBar>
  )
}

export default NavBar;
