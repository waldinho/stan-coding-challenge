import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import StanLogo from './Logo';
import { NAV } from '../constants/general'
import * as style from '../styleVars/variables';

const ACTIVE_CLASS = 'active';

const Nav = (): JSX.Element => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');
  return (
    <Wrapper>
      <StanLogo />
      <Menu>
        {NAV?.map((item, i) => {
          const { title, location } = item;
          return (
            <MenuItem className={splitLocation[1] === location && `${ACTIVE_CLASS}` || ''} key={title}>
              <MenuLink to={`/${location}`}>{title}</MenuLink>
            </MenuItem>
          )
        })}
      </Menu>
    </ Wrapper>
  )
};

const Wrapper = styled.div`
  ${style.column};
  @media (min-width: ${style.desktop}) {
    ${style.row};
    margin: 0 auto;
  }
`;

const Menu = styled.ul`
  font-Size: ${style.fontSize.md};
  padding: 0;
  margin: auto;
  @media (min-width: ${style.desktop}) {
    font-Size: ${style.fontSize.lg};
    margin: auto 0;
  }
`;

const MenuItem = styled.li`
  display: inline;
  padding: 0 ${style.spacing.md};
  @media (min-width: ${style.desktop}) {
    padding: 0 ${style.spacing.lg};
  }
  &.${ACTIVE_CLASS} a {
    color: ${style.white}
  }
`;

const MenuLink = styled(Link)`
  color: ${style.grey};
  text-decoration: none;
`;

export default Nav;