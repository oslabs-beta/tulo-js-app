import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/client';
import { useDispatch } from 'react-redux';
import { updateUserSession } from '../redux/actions/actionCreators';
import logo from '../public/images/logo-teal.png';
import githubLogo from '../public/images/github-logo.png';
import npmLogo from '../public/images/npm-logo.png';
import styled from 'styled-components';
import { COLORS } from '../styles/constants';
import Spacer from './Spacer';

const Header = () => {
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
    signOut({ callbackUrl: 'http:///' });
    // TODO: dispatch user signout action
  };

  return (
    <Wrapper>
      <NavBar>
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
        {/* TODO: link to npm page */}
        <NpmLinkWrapper href=''>
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
      </NavBar>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  padding: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.offWhite};
  box-shadow: 0 0 8px ${COLORS.tealPrimary};
`;

const NavBar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
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
