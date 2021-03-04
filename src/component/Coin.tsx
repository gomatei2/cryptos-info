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
}) => (
  <Container>
    <main>
      <button
        title="Clique para visualizar"
        type="button"
        onClick={() => setSelectedCoin(name)}
      >
        <img src={image} alt="crypto" />
        <h1>{name}</h1>
        <p>{symbol}</p>
      </button>

      <aside>
        <p title="Price" style={{ width: '110px' }}>
          {price.toLocaleString('en-us', {
            style: 'currency',
            currency: 'USD',
          })}
        </p>
        <P
          title="Day variation"
          isPositive={priceChange < 0}
          style={{ width: '80px' }}
        >
          {priceChange.toFixed(2)}%
        </P>
        <p title="Volume" style={{ width: '185px' }}>
          {volume.toLocaleString('en-us', {
            style: 'currency',
            currency: 'USD',
          })}
        </p>
      </aside>
    </main>
  </Container>
);

export default Coin;
