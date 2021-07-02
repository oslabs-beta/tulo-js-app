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
            <Image
              src={gearLogo}
              alt='tulo.js gear logo'
              width={400}
              height={400}
            />
            <ImageShadow />
          </ImageWrapper>
          <Spacer size={100} />
          <div>
            <LandingTulo>tulo.js</LandingTulo>
            <LandingHeading>
              Making service workers easy so that your app is{' '}
              <strong>fast and reliable, even offline.</strong>
            </LandingHeading>
            <Link href='/docs' passHref>
              <DocsAnchor>Read the docs &rarr;</DocsAnchor>
            </Link>
          </div>
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
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
`;

const ImageShadow = styled.div`
  width: 100%;
  border: solid ${COLORS.offWhite};
  box-shadow: 0 48px 36px ${COLORS.darkGrey};
`;

const LandingTulo = styled.h1`
  font-size: 5rem;
  margin-bottom: 24px;
`;

const LandingHeading = styled.h2`
  margin-bottom: 36px;
  font-size: 2.5rem;
  font-weight: 200;
  font-style: italic;

  & > strong {
    color: ${COLORS.tealPrimary};
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
