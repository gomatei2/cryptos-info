import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import { Container, Content } from '@/styles/components/BitcoinCard';

interface CryptoCardProps {
  image: string;
  name: string;
  price: number;
  lastUpdate: Date;
}

const CryptoCard: React.FC<CryptoCardProps> = ({
  image,
  name,
  price,
  lastUpdate,
}) => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <Container>
      <img src={image} alt="crypto" />

      <Content>
        <aside>
          <strong>{name}</strong>
          <p>TI</p>
        </aside>

        <h1>
          {price.toLocaleString(router.locale, {
            style: 'currency',
            currency: t('common:currency'),
          })}
        </h1>

        <hr />

        <p>
          {t('common:last-update', {
            date: new Date(lastUpdate).toLocaleString(router.locale),
          })}
        </p>
      </Content>
    </Container>
  );
};

export default CryptoCard;
