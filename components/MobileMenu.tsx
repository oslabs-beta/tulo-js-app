import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import githubLogo from '../public/images/github-logo.png';
import npmLogo from '../public/images/npm-logo.png';
import xIcon from '../public/images/x-icon.svg';
import styled from 'styled-components';
import { COLORS } from '../styles/constants';

// TODO: conditionally render Sign In / Sign Out based on user session (like in Header)

type MobileMenuProps = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: Function;
};

const MobileMenu = ({ mobileMenuOpen, setMobileMenuOpen }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(mobileMenuOpen);

  useEffect(() => {
    setIsOpen(mobileMenuOpen);
  }, [mobileMenuOpen]);

  const closeMenuHandler = () => {
    setIsOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <Wrapper isOpen={isOpen}>
      <MenuUL>
        <MenuLI onClick={closeMenuHandler}>
          <Link href='/dashboard' passHref>
            <MenuAnchor>Dashboard</MenuAnchor>
          </Link>
        </MenuLI>
        <MenuLI onClick={closeMenuHandler}>
          <Link href='/docs' passHref>
            <MenuAnchor>Documentation</MenuAnchor>
          </Link>
        </MenuLI>
        <MenuLI onClick={closeMenuHandler}>
          <MenuAnchor
            href='https://github.com/oslabs-beta/tulo.js'
            target='_blank'
          >
            <Image src={githubLogo} alt='GitHub Logo' width={40} height={40} />
          </MenuAnchor>
        </MenuLI>
        <MenuLI onClick={closeMenuHandler}>
          <MenuAnchor
            href='https://www.npmjs.com/package/tulo-js'
            target='_blank'
          >
            <Image src={npmLogo} alt='npm Logo' width={100} height={75} />
          </MenuAnchor>
        </MenuLI>
        <MenuLI onClick={closeMenuHandler}>
          <Link href='/signin' passHref>
            <MenuAnchor>Sign in</MenuAnchor>
          </Link>
        </MenuLI>
      </MenuUL>
      <CloseButton onClick={closeMenuHandler}>
        <Image
          src={xIcon}
          alt='X out of menu icon'
          aria-label='Close Menu'
          width={64}
          height={64}
        />
      </CloseButton>
    </Wrapper>
  );
};

type WrapperProps = {
  isOpen: boolean;
};

type ClickProps = {
  onClick: Function;
};

const Wrapper = styled.div<WrapperProps>`
  display: ${(p) => (p.isOpen ? 'flex' : 'none')};
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${COLORS.tealPrimary};
`;

const MenuUL = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${COLORS.offWhite};
`;

const MenuLI = styled.li<ClickProps>`
  height: 80px;
  display: flex;
  align-items: center;
`;

const MenuAnchor = styled.a`
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: ${COLORS.offWhite};
  text-decoration: none;
`;

const CloseButton = styled.button<ClickProps>`
  position: absolute;
  top: 30px;
  right: 30px;
  padding: 0;
  background-color: transparent;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export default MobileMenu;
