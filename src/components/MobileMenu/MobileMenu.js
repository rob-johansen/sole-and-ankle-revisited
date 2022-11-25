/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <Content>
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>Close</VisuallyHidden>
          <Icon id="close" strokeWidth={2} />
        </CloseButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  align-items: flex-end;
  background-color: var(--color-modal-overlay);
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`

const Content = styled(DialogContent)`
  background-color: var(--color-white);
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  min-width: 300px;
  padding: 28px 16px 32px 32px;
  width: 80%;
`

const CloseButton = styled(UnstyledButton)`
  margin-left: auto;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const NavLink = styled.a`
  color: ${COLORS.gray['900']};
  font-size: ${18 / 16}rem;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  
  &:hover {
    color: ${COLORS.secondary};
  }
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const FooterLink = styled.a`
  color: ${COLORS.gray['700']};
  font-size: ${14 / 16}rem;
  text-decoration: none;
`

export default MobileMenu;
