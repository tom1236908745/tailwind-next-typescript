import type { NextPage } from "next";
import Head from "next/head";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <div className="mx-auto flex max-w-sm items-center space-x-4 rounded-xl bg-white p-6 shadow-lg">
        <div className="shrink-0">
          <span className="h-12 w-12" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
    </div>
  );
};

export default About;
