import { ChangeEvent, useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import Cookies from 'js-cookie';
import useTranslation from 'next-translate/useTranslation';
import { ThemeProvider } from 'styled-components';
import Header from '@/components/Header';
import Coin from '@/components/Coin';
import CryptoCard from '@/components/CryptoCard';

import GlobalStyle from '@/styles/global';
import { Container, Content } from '@/styles/pages/Home';
import dark from '@/styles/themes/dark';
import light from '@/styles/themes/light';

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

interface HomeProps {
  storageTheme: typeof light;
}

const Home: React.FC<HomeProps> = ({ storageTheme }) => {
  const { t } = useTranslation();
  const [theme, setTheme] = useState(storageTheme ?? light);

  const [data, setData] = useState<CoinDTO[]>([]);
  const [search, setSearch] = useState('');

  const [image, setImage] = useState('');
  const [cryptoName, setCryptoName] = useState('');
  const [price, setPrice] = useState(0);
  const [lastUpdate, setLastUpdate] = useState(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    Cookies.set('theme', JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${t(
        'common:currency'
      )}&order=market_cap_desc&per_page=20&page=1&sparkline=false`
    ).then(response =>
      response.json().then(responseData => setData(responseData))
    );
  }, [t]);

  useEffect(() => {
    if (data.length > 0) {
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

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  // TODO
  if (data.length === 0) {
    return <div />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
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
      <GlobalStyle />
    </ThemeProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { theme } = context.req.cookies;

  return {
    props: {
      storageTheme: JSON.parse(theme),
    },
  };
};

export default Home;
