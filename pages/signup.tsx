import Head from 'next/head';
import Link from 'next/link';

const Signup = () => {
  return (
    <>
      <Head>
        <title>Sign up | tulo.js</title>
        <meta
          name='description'
          content='Sign up to monitor your service worker caching strategies on the tulo.js dashboard.'
        />
      </Head>
      <h1>Sign up</h1>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <br />
      <Link href='/login'>
        <a>Login</a>
      </Link>
    </>
  );
};

export default Signup;
