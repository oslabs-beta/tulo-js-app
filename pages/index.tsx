import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>tulo.js | Home</title>
        <meta
          name='description'
          content='Making service workers easy so that your app is fast and reliable, even offline.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Home</h1>
      <Link href='/login'>
        <a>Login</a>
      </Link>
      <br />
      <Link href='/signup'>
        <a>Sign up</a>
      </Link>
    </>
  );
}
