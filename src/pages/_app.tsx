import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { SheetContextProvider } from '../contexts/Sheet/Sheet.context';
import { DiceContextProvider } from '../contexts/Dice/Dice.context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SheetContextProvider>
      <DiceContextProvider>
        <Component {...pageProps} />
      </DiceContextProvider>
    </SheetContextProvider>
  );
}

export default MyApp;
