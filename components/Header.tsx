import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/client';
import { useDispatch } from 'react-redux';
import { updateUserSession } from '../redux/actions/actionCreators';
import { PRODUCTION_URL } from '../utils/constants';
import logo from '../public/images/logo-teal.png';
import githubLogo from '../public/images/github-logo.png';
import npmLogo from '../public/images/npm-logo.png';
import menuIcon from '../public/images/menu-icon.svg';
import styled from 'styled-components';
import { COLORS } from '../styles/constants';
import Spacer from './Spacer';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuButtonClick = () => {
    setMobileMenuOpen(true);
  };

  const [session, loading] = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    // if an auth session is established,
    // fetch the user from the sessions collection in the database
    // then dispatch an action to update the user state branch
    if (session) {
      fetch(`/api/user/${session.accessToken}`)
        .then((res) => res.json())
        .then((userDoc) => {
          dispatch(updateUserSession({ ...userDoc }));
        });
    }
  }, [session, loading, dispatch]);

  const handleSignOut = () => {
    signOut({ callbackUrl: PRODUCTION_URL });
    // TODO: dispatch user signout action
  };

  return (
    <Wrapper>
      <MobileNavBar>
        <Link href='/' passHref>
          <ImageMenuAnchor>
            <Image src={logo} alt='tulo.js logo' width={100} height={39} />
          </ImageMenuAnchor>
        </Link>
        <MenuIconButton onClick={handleMenuButtonClick}>
          <Image
            src={menuIcon}
            alt='menu hamburger icon'
            width={30}
            height={30}
          />
        </MenuIconButton>
      </MobileNavBar>
      <DesktopNavBar>
        <Link href='/' passHref>
          <ImageLinkWrapper>
            <Image src={logo} alt='tulo.js logo' width={100} height={39} />
          </ImageLinkWrapper>
        </Link>
        <Spacer size={24} />
        <Link href='/dashboard' passHref>
          <NavLinkWrapper>Dashboard</NavLinkWrapper>
        </Link>
        <Spacer size={24} />
        <Link href='/docs' passHref>
          <NavLinkWrapper>Documentation</NavLinkWrapper>
        </Link>
        <Spacer size={24} />
        <GitHubLinkWrapper
          href='https://github.com/oslabs-beta/tulo.js'
          target='_blank'
        >
          <Image src={githubLogo} alt='GitHub logo' width={28} height={28} />
        </GitHubLinkWrapper>
        <Spacer size={16} />
        <NpmLinkWrapper
          href='https://www.npmjs.com/package/tulo-js'
          target='_blank'
        >
          <Image src={npmLogo} alt='GitHub logo' width={60} height={45} />
        </NpmLinkWrapper>
        <Spacer size={16} />
        {session ? (
          <NavLinkWrapper onClick={handleSignOut}>Sign out</NavLinkWrapper>
        ) : (
          <Link href='/signin' passHref>
            <NavLinkWrapper>Sign in</NavLinkWrapper>
          </Link>
        )}
      </DesktopNavBar>
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={(bool: boolean) => setMobileMenuOpen(bool)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  isolation: isolate;
  z-index: 1;
  padding: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.offWhite};
  box-shadow: 0 0 8px ${COLORS.tealPrimary};
`;

const MobileNavBar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

const ImageMenuAnchor = styled.a`
  display: flex;
  align-items: center;
`;

const MenuIconButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  background-color: transparent;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const DesktopNavBar = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    align-items: center;
  }
`;

const ImageLinkWrapper = styled.a`
  display: flex;
  align-items: flex-end;
`;

const NavLinkWrapper = styled.a`
  text-decoration: none;
  color: ${COLORS.darkGrey};

  &:hover {
    cursor: pointer;
    color: ${COLORS.purplePrimary};
  }

  &:focus {
    color: ${COLORS.orangePrimary};
  }
`;

const GitHubLinkWrapper = styled(NavLinkWrapper)`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const NpmLinkWrapper = styled(NavLinkWrapper)`
  display: flex;
  align-items: center;
`;

export default Header;
