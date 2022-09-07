import Login from "../components/Login";
import Head from 'next/head'

const login = () => {
  return (
    <>
      <Head>
        <title>Mallu Nighandu - Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </>
  );
};

export default login;