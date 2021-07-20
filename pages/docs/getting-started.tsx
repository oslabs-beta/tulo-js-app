import Head from 'next/head';
import Layout from '../../components/Layout';
import DocsWrapper from '../../components/docs/DocsWrapper';
import DocsContent from '../../components/docs/DocsContent';
import DocsSidebar from '../../components/docs/DocsSidebar';
import DocsHeading from '../../components/docs/DocsHeading';
import DocsTextBlock from '../../components/docs/DocsTextBlock';
import DocsNextPrev from '../../components/docs/DocsNextPrev';
import AnchorLink from '../../components/docs/AnchorLink';

const GettingStarted = () => {
  return (
    <>
      <Head>
        <title>Getting started | tulo.js</title>
        <meta name='description' content='Getting started with tulo.js' />
      </Head>
      <Layout>
        <DocsWrapper>
          <DocsContent>
            <DocsHeading>Getting started</DocsHeading>
            <DocsTextBlock>
              Welcome to tulo.js! Using the{' '}
              <AnchorLink
                href='https://www.npmjs.com/package/tulo-js'
                target='_blank'
              >
                tulo-js npm package
              </AnchorLink>
              , you can add a service worker and implement caching strategies to
              make your website fast and reliable, even when users are offline.
            </DocsTextBlock>
            <DocsTextBlock>
              This documentation outlines the steps required to configure
              caching strategies for different files in your project (markup,
              stylesheets, images, fonts, etc.) based on your business needs.
            </DocsTextBlock>
            <DocsTextBlock>
              After following the instructions to set up the tulo-js library in
              your project, you can optionally sign in to monitor caching
              activity here on the tulo.js dashboard (the Monitor documentation
              section walks through this step).
            </DocsTextBlock>
            <DocsTextBlock>
              The dashboard retrieves metrics from your deployed website for
              each resource/file including average load times, resource size,
              and user connection types (e.g. 4G, 2G, Offline).
            </DocsTextBlock>
            <DocsNextPrev
              prev={null}
              prevRef=''
              next='Installation'
              nextRef='/docs/install'
            />
          </DocsContent>
          <DocsSidebar active='getting-started' />
        </DocsWrapper>
      </Layout>
    </>
  );
};

export default GettingStarted;
