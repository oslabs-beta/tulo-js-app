import Head from 'next/head';
import Link from 'next/link';

const Login = () => {
  return (
    <>
      <Head>
        <title>Login | tulo.js</title>
        <meta name='description' content='Login to the tulo.js dashboard.' />
      </Head>
      <h1>Login</h1>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <br />
      <Link href='/signup'>
        <a>Sign up</a>
      </Link>
    </>
  );
};

export default Login;
