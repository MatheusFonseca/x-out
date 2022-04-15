import type { GetServerSideProps, NextPage } from 'next';
import { Sheet } from '@/components';
import { IDice } from '@/interfaces';
import { rollDice } from '@/utils';

interface HomeProps {
  initialDice: IDice;
}

const Home: NextPage<HomeProps> = ({ initialDice }: HomeProps) => {
  return (
    <div className="container mx-auto">
      <Sheet initialDice={initialDice} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  return {
    props: {
      initialDice: rollDice(),
    },
  };
};

export default Home;
