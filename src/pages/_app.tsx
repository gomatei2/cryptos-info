import { AppProps } from 'next/app';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>CryptoView: {t('common:title')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
