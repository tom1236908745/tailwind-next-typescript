import Link from "next/link";
import { ReactNode } from "react";

const Layout = ({ children }: Props) => {
  return (
    <div>
      <nav className="flex flex-rows p-2 bg-gray-400 text-white front-bold">
        <Link href="/">
          <a>Home </a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
      {children}
    </div>
  );
};

type Props = {
  children?: ReactNode;
};

export default Layout;
