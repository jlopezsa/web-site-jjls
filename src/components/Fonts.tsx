import styled from 'styled-components';
import { colors, fontsDesktop } from '../styles/globalStyles';

export const FNT = {
  H3: styled.h3`
    font-size: ${fontsDesktop.headline3Desktop};
    text-align: center;
    color: ${colors.wc1};
    margin-top: 50px;
    margin-bottom: 0px;
    `,
  H5: styled.h5`
    font-size: ${fontsDesktop.headline5Desktop};
    text-align: center;
    color: ${colors.wc1};
    margin-top: 8px;
    margin-bottom: 0px;
  `,
  H5Title: styled.h5`
    font-size: ${fontsDesktop.headline5Desktop};
    text-align: left;
    color: ${colors.wc1};
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 100px;
    margin-right: 100px;
    `,
  BODY: styled.h5`
    font-size: ${fontsDesktop.captionDesktop};
    text-align: left;
    color: ${colors.wc1};
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 100px;
    margin-right: 100px;
    font-weight: normal;
  `
}
