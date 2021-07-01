import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import logo from '../public/images/logo-offWhite.png';
import githubLogo from '../public/images/github-logo.png';
import { COLORS } from '../styles/constants';

import VisuallyHidden from '../components/VisuallyHidden';
import Spacer from '../components/Spacer';
import Button from '../components/Button';
import Input from '../components/Input';
import AnchorLink from '../components/AnchorLink';

const Signup = () => {
  return (
    <>
      <Head>
        <title>Sign up | tulo.js</title>
        <meta
          name='description'
          content='Sign up to monitor your service worker caching strategies on the tulo.js dashboard.'
        />
      </Head>
      <Wrapper>
        <LogoContainer>
          <Image src={logo} alt='tulo.js logo' width={300} height={121} />
        </LogoContainer>
        <SignupContainer>
          <Heading>Welcome!</Heading>
          <Spacer size={32} />
          <VisuallyHidden>
            <label htmlFor='email'>Email</label>
          </VisuallyHidden>
          <Input name='email' type='email' placeholder='Email' />
          <Spacer size={20} />
          <VisuallyHidden>
            <label htmlFor='password'>Password</label>
          </VisuallyHidden>
          <Input name='password' type='password' placeholder='Password' />
          <Spacer size={20} />
          <Button>Sign up with email</Button>
          <Spacer size={12} />
          <Line />
          <Spacer size={12} />
          <Button>
            <GitHubWrapper>
              <Image
                src={githubLogo}
                alt='GitHub logo'
                width={24}
                height={24}
              />
              &nbsp; Sign up with GitHub
            </GitHubWrapper>
          </Button>
          <Spacer size={32} />
          <Link href='/login' passHref>
            <AnchorLink>Already signed up? Login &rarr;</AnchorLink>
          </Link>
        </SignupContainer>
      </Wrapper>
    </>
  );
};

const Heading = styled.h1`
  font-size: 2rem;
`;

const Wrapper = styled.main`
  min-height: 100%;
  display: flex;
  justify-content: center;
`;

const LogoContainer = styled.section`
  display: none;

  // display split layout with logo on tablets and larger devices
  @media (min-width: 768px) {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.tealPrimary};
  }
`;

const SignupContainer = styled.section`
  width: 100%;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

const Line = styled.hr`
  width: min(100%, 350px);
  border-top: 1px solid ${COLORS.grey};
`;

const GitHubWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Signup;
