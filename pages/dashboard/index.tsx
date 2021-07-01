import Head from 'next/head';
import styled from 'styled-components';
import Layout from '../../components/Layout';

const Dashboard = () => {
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
        <Main>Dashboard</Main>
      </Layout>
    </>
  );
};

const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

export default Dashboard;
