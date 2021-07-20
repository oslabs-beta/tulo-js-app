import Head from 'next/head';
import Layout from '../../components/Layout';
import DocsWrapper from '../../components/docs/DocsWrapper';
import DocsContent from '../../components/docs/DocsContent';
import DocsSidebar from '../../components/docs/DocsSidebar';
import DocsHeading from '../../components/docs/DocsHeading';
import DocsTextBlock from '../../components/docs/DocsTextBlock';
import CodeSnippet from '../../components/docs/CodeSnippet';
import DocsNextPrev from '../../components/docs/DocsNextPrev';

const Install = () => {
  return (
    <>
      <Head>
        <title>Installation | tulo.js</title>
        <meta name='description' content='Install tulo.js' />
      </Head>
      <Layout>
        <DocsWrapper>
          <DocsContent>
            <DocsHeading>Installation</DocsHeading>
            <DocsTextBlock>
              Navigate to the root of your project in the terminal and enter the
              command below to install the tulo-js npm package.
            </DocsTextBlock>
            <CodeSnippet terminal={true}>npm install tulo-js</CodeSnippet>
            <DocsTextBlock>
              Once you have the tulo.js npm package installed, head over to the
              next section to add a service worker.
            </DocsTextBlock>
            <DocsNextPrev
              prev='Getting started'
              prevRef='/docs/getting-started'
              next='Add a service worker'
              nextRef='/docs/add-a-service-worker'
            />
          </DocsContent>
          <DocsSidebar active='install' />
        </DocsWrapper>
      </Layout>
    </>
  );
};

export default Install;
