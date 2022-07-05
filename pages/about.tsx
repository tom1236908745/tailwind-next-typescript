import type { NextPage } from "next";
import Head from "next/head";
import { useRecoilValue } from "recoil";
import { itemState, charCountState } from "../atoms/CenterAtom";

const About: NextPage = () => {
  const item = useRecoilValue(charCountState);
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
          <div className="text-xl font-medium text-black">新着</div>
          <p className="text-slate-500">{item}が追加されました!</p>
        </div>
      </div>
    </div>
  );
};

export default About;
