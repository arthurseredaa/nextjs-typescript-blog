import { wrapper } from '../redux/store';
import '../styles/globals.css'
import { FC } from 'react';
import {AppProps} from 'next/app';

const WrappedApp: FC<AppProps> = ({Component, pageProps}: any) => (
  <Component {...pageProps} />
)

export default wrapper.withRedux(WrappedApp);
