import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>
    </div>
  );
};

export default Home;
