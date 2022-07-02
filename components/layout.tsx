import Link from "next/link";
import { ReactNode } from "react";

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-purple-300">
      <nav className="flex justify-center space-x-4 pt-6">
        <Link
          href="/"
          className="rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
        >
          <a>Home </a>
        </Link>
        <Link
          href="/about"
          className="rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
        >
          <a>About</a>
        </Link>
      </nav>
      .{children}
    </div>
  );
};

type Props = {
  children?: ReactNode;
};

export default Layout;
