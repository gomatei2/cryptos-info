import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Header from '@/components/Header';

import GlobalStyle from '@/styles/global';
import light from '@/styles/themes/light';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={light}>
      <Head>
        <title>CryptoView: {t('common:title')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
