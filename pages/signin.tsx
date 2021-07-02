import Head from 'next/head';
import Image from 'next/image';
import { signIn, useSession } from 'next-auth/client';
import styled from 'styled-components';
import { COLORS } from '../styles/constants';
import logo from '../public/images/logo-offWhite.png';
import githubLogo from '../public/images/github-logo.png';
import Spacer from '../components/Spacer';
import Button from '../components/Button';

const SignIn = () => {
  // on component mount, check if a user session is established via next-auth
  // TODO: if a session is established, redirect to dashboard
  const [session, loading] = useSession();

  const handleSignIn = () => {
    // Docs for next-auth Client API signIn: https://next-auth.js.org/getting-started/client#signin
    signIn('github', {
      callbackUrl: 'http://localhost:3000/dashboard',
    });
  };

  return (
    <>
      <Head>
        <title>Sign in | tulo.js</title>
        <meta name='description' content='Sign in to your tulo.js dashboard.' />
      </Head>
      <Wrapper>
        <LogoContainer>
          <Image src={logo} alt='tulo.js logo' width={300} height={121} />
        </LogoContainer>
        <SignupContainer>
          <h1>Welcome!</h1>
          <Spacer size={32} />
          <Button onClick={handleSignIn}>
            <GitHubWrapper>
              <Image
                src={githubLogo}
                alt='GitHub logo'
                width={24}
                height={24}
              />
              &nbsp; Sign in with GitHub
            </GitHubWrapper>
          </Button>
        </SignupContainer>
      </Wrapper>
    </>
  );
};

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

const GitHubWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SignIn;
