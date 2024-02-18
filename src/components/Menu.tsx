import { NavLink } from "react-router-dom";
import { colors, fontsDesktop } from "../styles/globalStyles";
import styled from "styled-components";

const MenuComponent = {
  navLink: styled(NavLink)`
    color: ${colors.wc1};
    font-size: ${fontsDesktop.headline5Desktop};
    text-decoration: none;
    margin-top: 0px;
    margin-bottom: 20px;

    &:hover {
      color: ${colors.bc1};
      transition: 1000ms;
      text-decoration: underline;
    }
  `,

  ul: styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 73px;
    padding-left: 0px;
  `,
};

const Menu = () => {
  return (
    <div>
      <nav>
        <MenuComponent.ul>
          <MenuComponent.navLink to="/">About</MenuComponent.navLink>
          <MenuComponent.navLink to="/">Projects dev</MenuComponent.navLink>
          <MenuComponent.navLink to="/">Study</MenuComponent.navLink>
          <MenuComponent.navLink to="/">Research</MenuComponent.navLink>
          <MenuComponent.navLink to="/">Teaching</MenuComponent.navLink>
        </MenuComponent.ul>
      </nav>
    </div>
  );
};

export default Menu;
