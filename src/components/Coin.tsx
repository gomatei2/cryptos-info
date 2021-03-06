import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import { Container, P } from '@/styles/components/Coin';

interface CoinProps {
  name: string;
  price: number;
  symbol: string;
  volume: number;
  image: string;
  priceChange: number;
  setSelectedCoin: (name: string) => void;
}

const Coin: React.FC<CoinProps> = ({
  name,
  price,
  symbol,
  volume,
  image,
  priceChange,
  setSelectedCoin,
}) => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <Container>
      <main>
        <button
          title={t('common:view-title')}
          type="button"
          onClick={() => setSelectedCoin(name)}
        >
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p>{symbol}</p>
        </button>

        <aside>
          <p title={t('common:price-title')} style={{ width: '110px' }}>
            {price.toLocaleString(router.locale, {
              style: 'currency',
              currency: t('common:currency'),
            })}
          </p>
          <P
            title={t('common:day-variation-title')}
            isPositive={priceChange < 0}
            style={{ width: '80px' }}
          >
            {priceChange.toFixed(2)}%
          </P>
          <p title={t('common:volume-title')} style={{ width: '185px' }}>
            {volume.toLocaleString(router.locale, {
              style: 'currency',
              currency: t('common:currency'),
            })}
          </p>
        </aside>
      </main>
    </Container>
  );
};

export default Coin;
