import Head from 'next/head';
import Layout from '../../components/Layout';
import DocsWrapper from '../../components/docs/DocsWrapper';
import DocsContent from '../../components/docs/DocsContent';
import DocsSidebar from '../../components/docs/DocsSidebar';
import DocsHeading from '../../components/docs/DocsHeading';
import DocsTextBlock from '../../components/docs/DocsTextBlock';
import CodeSnippet from '../../components/docs/CodeSnippet';
import DocsNextPrev from '../../components/docs/DocsNextPrev';

const AddServiceWorker = () => {
  return (
    <>
      <Head>
        <title>Add a service worker | tulo.js</title>
        <meta name='description' content='Add a service worker | tulo.js' />
      </Head>
      <Layout>
        <DocsWrapper>
          <DocsContent>
            <DocsHeading>Add a service worker</DocsHeading>
            <DocsTextBlock>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </DocsTextBlock>
            <CodeSnippet>yolo</CodeSnippet>
            <DocsTextBlock>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </DocsTextBlock>
            <DocsTextBlock>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </DocsTextBlock>
            <CodeSnippet>yolo</CodeSnippet>
            <DocsTextBlock>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </DocsTextBlock>
            <DocsTextBlock>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </DocsTextBlock>
            <DocsNextPrev
              prev='Installation'
              prevRef='/docs/install'
              next='Monitor'
              nextRef='/docs/monitor'
            />
          </DocsContent>
          <DocsSidebar active='service-worker' />
        </DocsWrapper>
      </Layout>
    </>
  );
};

export default AddServiceWorker;
