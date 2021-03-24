import Head from "next/head";
import { FC, ReactNode } from "react";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
  pageName?: string;
}

export const Layout: FC<LayoutProps> = ({children, pageName}: LayoutProps) => {

  return <div>
    <Head>
      <title>Blog | {pageName}</title>
    </Head>
    <Header />
    {children}
  </div>
}
