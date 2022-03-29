import type { NextPage } from 'next';
import { Box } from '../components/Box/Box';

const Home: NextPage = () => {
  return (
    <div>
      <Box number={1} color="yellow" variant="default" />
    </div>
  );
};

export default Home;
