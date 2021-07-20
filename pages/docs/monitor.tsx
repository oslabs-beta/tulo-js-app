import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import DocsWrapper from '../../components/docs/DocsWrapper';
import DocsContent from '../../components/docs/DocsContent';
import DocsSidebar from '../../components/docs/DocsSidebar';
import DocsHeading from '../../components/docs/DocsHeading';
import DocsTextBlock from '../../components/docs/DocsTextBlock';
import CodeSnippet from '../../components/docs/CodeSnippet';
import DocsNextPrev from '../../components/docs/DocsNextPrev';
import AnchorLink from '../../components/docs/AnchorLink';

const Monitor = () => {
  return (
    <>
      <Head>
        <title>Monitor | tulo.js</title>
        <meta
          name='description'
          content='Monitor your service worker with tulo.js'
        />
      </Head>
      <Layout>
        <DocsWrapper>
          <DocsContent>
            <DocsHeading>Monitor</DocsHeading>
            <DocsTextBlock>
              <Link href='/signin' passHref>
                <AnchorLink>Sign in</AnchorLink>
              </Link>{' '}
              to the{' '}
              <Link href='/dashboard' passHref>
                <AnchorLink>tulo.js dashboard</AnchorLink>
              </Link>{' '}
              to monitor your caching strategies in production. You&apos;ll be
              able to view the caching strategies you implemented on a per
              resource basis, including statistics on cache events and your
              users.
            </DocsTextBlock>
            <DocsTextBlock>
              For example, what percentage of the time is your site&apos;s logo
              image being fetched from the cache versus the network? What is the
              difference in average load time when it is fetched from the cache
              versus the network? What percentage of your users are accessing
              your cached pages when their connection is offline?
            </DocsTextBlock>
            <DocsNextPrev
              prev='Add a service worker'
              prevRef='/docs/add-a-service-worker'
              next={null}
              nextRef=''
            />
          </DocsContent>
          <DocsSidebar active='monitor' />
        </DocsWrapper>
      </Layout>
    </>
  );
};

export default Monitor;
