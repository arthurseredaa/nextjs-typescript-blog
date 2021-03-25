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
      <title>Blog | {pageName.length > 17 ? pageName.substring(0, 17).trim() + "..." : pageName}</title>
    </Head>
    <Header />
    {children}
  </div>
}
