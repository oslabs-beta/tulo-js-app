import Head from 'next/head';
import Link from 'next/link';
import { useSession } from 'next-auth/client';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import Loading from '../../components/Loading';
import DashboardBar from '../../components/dashboard/DashboardBar';
import DashboardBox from '../../components/dashboard/DashboardBox';
import { COLORS } from '../../styles/constants';

const Dashboard = () => {
  const [session, loading] = useSession();

  // if a user session is loading, display the Loading component
  if (loading) return <Loading />;

  return (
    <>
      <Head>
        <title>Dashboard | tulo.js</title>
        <meta
          name='description'
          content='Dashboard for tulojs cache monitoring.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Main>
          {!session ? (
            <Wrapper>
              <Link href='/signin' passHref>
                <SigninLink>Sign in to view the dashboard &rarr;</SigninLink>
              </Link>
            </Wrapper>
          ) : (
            <>
              <DashboardBar />
              <DashboardBox />
            </>
          )}
        </Main>
      </Layout>
    </>
  );
};

const Main = styled.main`
  width: 100%;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
`;

const Wrapper = styled.div`
  flex-basis: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SigninLink = styled.a`
  text-decoration: none;
  color: ${COLORS.tealPrimary};

  &:hover {
    cursor: pointer;
    color: ${COLORS.orangePrimary};
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
  }

  &:focus {
    outline: none;
    text-shadow: 0 0 8px ${COLORS.grey};
  }
`;

export default Dashboard;
