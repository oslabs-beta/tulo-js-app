import Head from 'next/head';
import styled from 'styled-components';
import Layout from '../../components/Layout';

const Docs = () => {
  return (
    <>
      <Head>
        <title>Documentation | tulo.js</title>
        <meta
          name='description'
          content='Documentation for tulojs npm package.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Main>Docs</Main>
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

export default Docs;
