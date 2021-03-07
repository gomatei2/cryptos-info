import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Switch from 'react-switch';
import useTranslation from 'next-translate/useTranslation';
import { ThemeContext } from 'styled-components';

import { Container, Locale } from '@/styles/components/Header';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
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
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={12}
        width={40}
        handleDiameter={20}
        offColor={colors.primary}
        onColor={colors.primary}
      />
    </Container>
  );
};

export default Header;
