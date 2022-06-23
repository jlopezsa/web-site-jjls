import { NavLink } from 'react-router-dom';
import { colors, fontsDesktop } from '../styles/globalStyles';
import styled from 'styled-components';

const MENU = {
  NavLink: styled(NavLink)`
    color: ${colors.wc1};
    font-size: ${fontsDesktop.headline4Desktop};
    text-decoration: none;
    margin-top: 0px;
    margin-bottom: 20px;

    &:hover{
      color: ${colors.bc1};
      transition: 1000ms;
      text-decoration: underline;
    }
  `,

  Ul: styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 73px;
    padding-left: 0px;
    `,
}

function Menu() {
  return (
    <div>
      <nav>
        <MENU.Ul>
          <MENU.NavLink to="/">About</MENU.NavLink>
          <MENU.NavLink to="/">Projects dev</MENU.NavLink>
          <MENU.NavLink to="/">Study</MENU.NavLink>
          <MENU.NavLink to="/">Research</MENU.NavLink>
          <MENU.NavLink to="/">Teaching</MENU.NavLink>
        </MENU.Ul>
      </nav>
    </div>
  )
}

export default Menu
