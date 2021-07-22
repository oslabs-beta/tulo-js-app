import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Spacer from '../components/Spacer';
import gearLogo from '../public/images/gear-logo-teal.png';
import { COLORS } from '../styles/constants';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | tulo.js</title>
        <meta
          name='description'
          content='Making service workers easy so that your app is fast and reliable, even offline.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Main>
          <ImageWrapper>
            <Image src={gearLogo} alt='tulo.js gear logo' layout='fill' />
            <ImageShadow />
          </ImageWrapper>
          <LandingWrapper>
            <LandingTulo>tulo.js</LandingTulo>
            <LandingHeading>
              Making service workers easy so that your app is{' '}
              <strong>fast and reliable, even offline.</strong>
            </LandingHeading>
            <Link href='/docs' passHref>
              <DocsAnchor>Read the docs &rarr;</DocsAnchor>
            </Link>
          </LandingWrapper>
        </Main>
      </Layout>
    </>
  );
};

const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  /* display: none; */
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 24px;

  @media (min-width: 992px) {
    margin-bottom: 0;
    display: block;
    flex-shrink: 0;
    width: 300px;
    height: 300px;
  }

  @media (min-width: 1200px) {
    width: 400px;
    height: 400px;
  }
`;

const ImageShadow = styled.div`
  width: 100%;
  border: solid ${COLORS.offWhite};
  box-shadow: 0 48px 36px ${COLORS.darkGrey};
`;

const LandingWrapper = styled.div`
  text-align: center;

  @media (min-width: 992px) {
    margin-left: 100px;
    text-align: left;
  }
`;

const LandingTulo = styled.h1`
  font-size: 4rem;
  margin-bottom: 24px;

  @media (min-width: 992px) {
    font-size: 5rem;
  }
`;

const LandingHeading = styled.h2`
  padding: 0 36px;
  margin-bottom: 36px;
  font-size: 1.75rem;
  font-weight: 200;
  font-style: italic;

  & > strong {
    color: ${COLORS.tealPrimary};
  }

  @media (min-width: 768px) {
    padding: 0;
    font-size: 2.5rem;
  }
`;

const DocsAnchor = styled.a`
  text-decoration: none;
  color: ${COLORS.purplePrimary};
  font-weight: 600;
  font-size: 1.25rem;

  &:hover {
    color: ${COLORS.orangePrimary};
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
  }
`;

export default Home;
