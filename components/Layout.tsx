import Head from "next/head";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  pageName?: string;
}

export const Layout: FC<LayoutProps> = ({children, pageName}: LayoutProps) => {

  return <div>
    <Head>
      <title>Blog | {pageName}</title>
    </Head>
    {children}
  </div>
}
