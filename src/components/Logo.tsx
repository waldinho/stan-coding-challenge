import React from 'react';
import styled from 'styled-components';
import LogoSVG from '../assets/logo.svg';
import { COMPANY_NAME } from '../constants/general'
import * as style from '../styleVars/variables';

const StanLogo = (): JSX.Element => <Logo src={LogoSVG} alt={`${COMPANY_NAME}`} width='180px' height='auto'/>;

const Logo = styled.img`
  margin: auto;
  padding: ${style.spacing.md} 0;
  @media (min-width: ${style.desktop}) {
    padding: ${style.spacing.lg};
    margin: 0;
  }
`;

export default StanLogo;