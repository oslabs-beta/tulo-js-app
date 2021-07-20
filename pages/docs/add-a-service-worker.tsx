import Head from 'next/head';
import Layout from '../../components/Layout';
import DocsWrapper from '../../components/docs/DocsWrapper';
import DocsContent from '../../components/docs/DocsContent';
import DocsSidebar from '../../components/docs/DocsSidebar';
import DocsHeading from '../../components/docs/DocsHeading';
import DocsTextBlock from '../../components/docs/DocsTextBlock';
import CodeSnippet from '../../components/docs/CodeSnippet';
import InlineCode from '../../components/docs/InlineCode';
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
              Navigate to your project&apos;s <InlineCode>public/</InlineCode>{' '}
              directory (or wherever you store static assets) to create a
              service worker file by running the command below. Note that you
              could call this file sw.js (or whatever you like) if you prefer a
              shorter name.
            </DocsTextBlock>
            <CodeSnippet terminal={true}>touch service-worker.js</CodeSnippet>
            <DocsTextBlock>
              If you are using Express to serve your front-end, create an
              endpoint to respond to GET requests to{' '}
              <InlineCode>/tulo</InlineCode> that sends{' '}
              <InlineCode>node_modules/tulo-js/tulo.js</InlineCode> as a
              response. Otherwise, adjust your import statement in the next step
              (see below).
            </DocsTextBlock>
            <DocsTextBlock>
              At the top of <InlineCode>service-worker.js</InlineCode>, import
              the tulo library:
            </DocsTextBlock>
            <pre>
              <CodeSnippet terminal={false}>
                {`// Use the below import statement if you set up an Express endpoint\nimport { cacheGenerator } from '/tulo';\n// Otherwise, import the library from node_modules\nimport { cacheGenerator } from 'node_modules/tulo-js/tulo.js';`}
              </CodeSnippet>
            </pre>
            <DocsTextBlock>
              Add a version number to <InlineCode>service-worker.js</InlineCode>
              . Remember to update this version number whenever you make updates
              to this file. This will ensure that a new service worker is
              installed then activated and your caches are automatically
              refreshed when you update your caching strategy.
            </DocsTextBlock>
            <pre>
              <CodeSnippet terminal={false}>
                {`// update version number when you change this file to register changes\nconst version = 1.0;`}
              </CodeSnippet>
            </pre>
            <DocsHeading>Develop caching strategies</DocsHeading>
            <DocsTextBlock>
              Develop a caching strategy for each of your website&apos;s
              resources (i.e. pages, stylesheets, images, logos, fonts, icons,
              audio/video, etc.). For example, you might want your pages to be
              requested fresh from the network whenever possible, so your
              caching strategy would be <InlineCode>NetworkFirst</InlineCode>.
            </DocsTextBlock>
            <DocsTextBlock>
              A <InlineCode>NetworkFirst</InlineCode> strategy will retrieve the
              resource from the network or serve the resource from the cache as
              a fallback if network fails. That way, if your users go offline,
              they can still access your pages from the cache if it has been
              populated on previous requests. That is the magic of service
              workers!
            </DocsTextBlock>
            <DocsTextBlock>
              Here are the caching strategies currently supported by tulo.js:
            </DocsTextBlock>
            <DocsTextBlock>
              <strong>
                <InlineCode>NetworkFirst</InlineCode>
              </strong>
              : Requests resource from the network, serves response to user, and
              adds resource to the specified cache. If the network request fails
              – either due to a faulty/offline connection or a server error –
              the service worker will check the cache for that resource and
              serve it to the client if found
            </DocsTextBlock>
            <DocsTextBlock>
              <strong>
                <InlineCode>CacheFirst</InlineCode>
              </strong>
              : Checks caches to see if the requested resource has already been
              cached, and serves it to the client if so. Otherwise, requests
              resource from the network and stores it in the specified cache
            </DocsTextBlock>
            <DocsTextBlock>
              <strong>
                <InlineCode>NetworkOnly</InlineCode>
              </strong>
              : Requests resource from the network and serves response to user.
              If the network request fails, a message is sent in response that
              the resource could not be found
            </DocsTextBlock>
            <DocsHeading>Implement caching strategies</DocsHeading>
            <DocsTextBlock>
              For each unique caching strategy (e.g. a caching strategy for
              images), write a cache specification in{' '}
              <InlineCode>service-worker.js</InlineCode>. Sample code for
              caching your images is provided below.
            </DocsTextBlock>
            <pre>
              <CodeSnippet terminal={false}>
                {`const imageCacheSpec = {\n  name: 'imageCache' + version,\n  types: ['image/png'],\n  urls: ['/logo.png', '/icon.png', 'banner.png'],\n  strategy: 'CacheFirst',\n  expiration: 60*60*1000\n};`}
              </CodeSnippet>
            </pre>
            <DocsTextBlock>
              See below for a boilerplate cache spec you can copy and paste in
              your file. Note that the <InlineCode>expiration</InlineCode> field
              is optional – by default, caches will be refreshed whenever the
              service worker restarts.
            </DocsTextBlock>
            <pre>
              <CodeSnippet terminal={false}>
                {`const sampleCacheSpec = {\n  name: '' + version, // e.g. 'pageCache' + version\n  types: [], // e.g. text/html\n  urls: [], // e.g. 'index/html'\n  strategy: '', // e.g. NetworkFirst\n  expiration: 60*60*1000 // in ms (optional)\n}`}
              </CodeSnippet>
            </pre>
            <DocsTextBlock>
              At the bottom of <InlineCode>service-worker.js</InlineCode>, add
              your defined cache specifications into an array, and pass it as an
              argument to the <InlineCode>cacheGenerator</InlineCode> function.
            </DocsTextBlock>
            <pre>
              <CodeSnippet terminal={false}>
                {`// If you have multiple cacheSpecs for different file types,\n// include your markup caches before images, stylesheets, fonts, etc.\ncacheGenerator([pagesCacheSpec, imageCacheSpec, stylesCacheSpec]);`}
              </CodeSnippet>
            </pre>
            <DocsHeading>Register service worker</DocsHeading>
            <DocsTextBlock>
              In your project&apos;s root file, add the below code snippet to
              register your service worker. If you are running a React app, this
              would be in your top-level component (e.g.{' '}
              <InlineCode>index.jsx</InlineCode>).
            </DocsTextBlock>
            <DocsTextBlock>
              If you are creating a project with static HTML pages, add this
              snippet in your root HTML file (i.e.{' '}
              <InlineCode>index.html</InlineCode>) at the bottom of your body
              tag within an opening{' '}
              <InlineCode>{`<script type='module'>`}</InlineCode> tag and a
              closing <InlineCode>{`</script>`}</InlineCode> tag.
            </DocsTextBlock>
            <pre>
              <CodeSnippet terminal={false}>
                {`if (navigator.serviceWorker) {\n  await navigator.serviceWorker.register('service-worker.js', {\n    type: 'module',\n    scope: '/'\n  });\n}`}
              </CodeSnippet>
            </pre>
            <DocsHeading>
              Check your service worker and caches in DevTools
            </DocsHeading>
            <DocsTextBlock>
              Serve your application then open up Google Chrome and navigate to
              your website. Open DevTools by clicking inspect (or entering
              cmd+option+I on Mac, ctrl+shift+I on Windows). Navigate to the
              Application panel and click Service Worker on the sidebar. You
              should see a new service worker installed and activated.
            </DocsTextBlock>
            <DocsTextBlock>
              Click on Cache Storage in the Application panel sidebar under
              Cache. Here you should be able to see each cache you created in{' '}
              <InlineCode>service-worker.js</InlineCode> and the files stored in
              them.
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
