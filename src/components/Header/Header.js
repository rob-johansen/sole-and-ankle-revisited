import React from 'react';
import styled from 'styled-components/macro';

import { BREAKPOINTS, COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">A Vendre</NavLink>
          <NavLink href="/new">Nouvelles&nbsp;Versions</NavLink>
          <NavLink href="/men">Hommes</NavLink>
          <NavLink href="/women">Femmes</NavLink>
          <NavLink href="/kids">Les Enfants</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <NavButton>
            <Icon id="shopping-bag" strokeWidth={1} />
          </NavButton>
          <NavButton>
            <Icon id="search" strokeWidth={1} />
          </NavButton>
          <NavButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={1} />
          </NavButton>
        </Nav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${BREAKPOINTS.tabletAndBelow} {
    align-items: center;
  }

  @media ${BREAKPOINTS.phoneAndBelow} {
    padding: 18px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    2rem,
    6.6vw - 2rem,
    4rem
  );
  margin: 0px 48px;
  overflow-x: auto;

  @media ${BREAKPOINTS.tabletAndBelow} {
    flex: 1;
    gap: 32px;
    justify-content: flex-end;
    margin: 0;
  }

  @media ${BREAKPOINTS.phoneAndBelow} {
    gap: 16px;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${BREAKPOINTS.tabletAndBelow} {
    flex: 0;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }

  @media ${BREAKPOINTS.tabletAndBelow} {
    display: none;
  }
`;

const NavButton = styled(UnstyledButton)`
  display: none;
  
  @media ${BREAKPOINTS.tabletAndBelow} {
    display: block;
  }
`

export default Header;
