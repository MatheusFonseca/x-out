import type { NextPage } from 'next';
import { Button } from '../components/Button/Button';
import { Dice } from '../components/Dice/Dice';
import { Row } from '../components/Row/Row';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-between items-center p-2">
        <Button size="lg">
          <p className="text-6xl text-white font-bold uppercase m-7 select-none">
            READY
          </p>
        </Button>
        <Button size="sm">
          <svg
            viewBox="0 0 576 512"
            width={50}
            height={39}
            className="fill-white"
          >
            <path d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z" />
          </svg>
        </Button>
        <Dice color="white" number={1} />
        <Dice color="white" number={2} />
        <Dice color="red" number={3} />
        <Dice color="yellow" number={4} />
        <Dice color="green" number={5} />
        <Dice color="blue" number={6} />
        <Button size="lg">
          <div className="py-4 px-20">
            <p className="text-6xl text-white font-bold uppercase select-none">
              107
            </p>
            <p className="text-3xl text-white font-thin uppercase select-none">
              score
            </p>
          </div>
        </Button>
      </div>
      <Row color="red" />
      <Row color="yellow" />
      <Row color="green" inverted />
      <Row color="blue" inverted />
    </div>
  );
};

export default Home;
