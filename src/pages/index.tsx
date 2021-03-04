import { ChangeEvent, useEffect, useState } from 'react';
import Head from 'next/head';
import useFetch from '@/hooks/useFetch';
import Coin from '@/component/Coin';
import CryptoCard from '@/component/CryptoCard';

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

export default function Home() {
  const [search, setSearch] = useState('');
  const [image, setImage] = useState('');
  const [cryptoName, setCryptoName] = useState('');
  const [price, setPrice] = useState(0);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  const { data } = useFetch<CoinDTO[]>(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (data) {
      const selectedCoin = data.find(coin => coin.name === 'Bitcoin');
      setImage(selectedCoin.image);
      setCryptoName(selectedCoin.name);
      setPrice(selectedCoin.current_price);
      setLastUpdate(selectedCoin.last_updated);
    }
  }, [data]);

  if (!data) {
    return <p>Carregando...</p>;
  }

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
      <Head>
        <title>Bitcoin hoje: Valor em Real e Dólar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
        <div>
          <h1>Search</h1>
          <form>
            <input type="text" onChange={handleChange} placeholder="Search" />
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
}
