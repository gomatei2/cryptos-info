import { format } from 'date-fns';

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
}) => (
  <Container>
    <img src={image} alt="crypto" />

    <Content>
      <aside>
        <strong>{name}</strong>
        <p>TI</p>
      </aside>

      <h1>
        {price.toLocaleString('en-us', {
          style: 'currency',
          currency: 'USD',
        })}
      </h1>

      <hr />

      <p>Last update: {format(new Date(lastUpdate), 'yyyy-MM-dd HH:mm:ss')}</p>
    </Content>
  </Container>
);

export default CryptoCard;
