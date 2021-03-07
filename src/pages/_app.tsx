import { useCallback, useState } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import Header from '@/components/Header';

import GlobalStyle from '@/styles/global';
import dark from '@/styles/themes/dark';
import light from '@/styles/themes/light';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { t } = useTranslation();
  const [theme, setTheme] = useState<DefaultTheme>(light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>CryptoView: {t('common:title')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header toggleTheme={toggleTheme} />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
