import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import { Container, Locale } from '@/styles/components/Header';

const Header: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <Container>
      <div>
        <img src="/bitcoin.svg" alt="CryptoView" />
        <strong>CryptoView</strong>
      </div>
      <aside>
        {router.locales.map(locale => (
          <Locale key={locale} isActive={locale === router.locale}>
            <Link href={router.asPath} locale={locale}>
              {t(`common:${locale}`)}
            </Link>
          </Locale>
        ))}
      </aside>
      <p>switcher</p>
    </Container>
  );
};

export default Header;
