import { ChangeEvent, useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Coin from '@/components/Coin';
import CryptoCard from '@/components/CryptoCard';

import { Container, Content } from '@/styles/pages/Home';

interface CoinDTO {
  id: string;
  name: string;
  current_price: number;
  symbol: string;
  total_volume: number;
  image: string;
  price_change_percentage_24h: number;
  last_updated: Date;
}

interface Props {
  data: CoinDTO[];
}

const Home: React.FC<Props> = ({ data }) => {
  const { t } = useTranslation();

  const [search, setSearch] = useState('');
  const [image, setImage] = useState('');
  const [cryptoName, setCryptoName] = useState('');
  const [price, setPrice] = useState(0);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (data) {
      const crypto = cryptoName || 'Bitcoin';
      const selectedCoin = data.find(coin => coin.name === crypto);
      setImage(selectedCoin.image);
      setCryptoName(selectedCoin.name);
      setPrice(selectedCoin.current_price);
      setLastUpdate(selectedCoin.last_updated);
    }
  }, [data, cryptoName]);

  const filteredCoins = data.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const setSelectedCoin = (name: string) => {
    const selectedCoin = data.find(coin => name === coin.name);
    setImage(selectedCoin.image);
    setCryptoName(selectedCoin.name);
    setPrice(selectedCoin.current_price);
    setLastUpdate(selectedCoin.last_updated);
  };

  return (
    <Container>
      <Content>
        <div>
          <h1>{t('home:search')}</h1>
          <form>
            <input
              type="text"
              onChange={handleChange}
              placeholder={t('home:search')}
            />
          </form>
        </div>
        <CryptoCard
          image={image}
          name={cryptoName}
          price={price}
          lastUpdate={lastUpdate}
        />
      </Content>
      {filteredCoins.map(coin => (
        <Coin
          key={coin.id}
          name={coin.name}
          price={coin.current_price}
          symbol={coin.symbol}
          volume={coin.total_volume}
          image={coin.image}
          priceChange={coin.price_change_percentage_24h}
          setSelectedCoin={setSelectedCoin}
        />
      ))}
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const currency = locale === 'pt-BR' ? 'BRL' : 'USD';
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=1&sparkline=false`
  );
  const data = await response.json();

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};

export default Home;
