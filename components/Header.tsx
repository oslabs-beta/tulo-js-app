import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/logo-teal.png';
import githubLogo from '../public/images/github-logo.png';
import npmLogo from '../public/images/npm-logo.png';
import styled from 'styled-components';
import { COLORS } from '../styles/constants';
import Spacer from './Spacer';

const Header = () => {
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
          <NavLinkWrapper>Docs</NavLinkWrapper>
        </Link>
        <Spacer size={24} />
        {/* TODO: link to GitHub repo */}
        <GitHubLinkWrapper href=''>
          <Image src={githubLogo} alt='GitHub logo' width={28} height={28} />
        </GitHubLinkWrapper>
        <Spacer size={16} />
        {/* TODO: link to npm page */}
        <NpmLinkWrapper href=''>
          <Image src={npmLogo} alt='GitHub logo' width={60} height={45} />
        </NpmLinkWrapper>
      </NavBar>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
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
