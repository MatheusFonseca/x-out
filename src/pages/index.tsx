import type { NextPage } from 'next';
import { Row } from '../components/Row/Row';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <Row color="red" />
      <Row color="yellow" />
      <Row color="green" inverted />
      <Row color="blue" inverted />
    </div>
  );
};

export default Home;
