import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { SheetContextProvider } from '../contexts/Sheet/Sheet.context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SheetContextProvider>
      <Component {...pageProps} />
    </SheetContextProvider>
  );
}

export default MyApp;
