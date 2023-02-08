type NFTDataTypes = {
  id: string;
  name: string;
  creator: string;
  price: number;
  description: string;
  image: number;
  bids: {
    id: string;
    name: string;
    price: number;
    image: number;
    date: string;
  }[];
}[];

type DataProps = {
  data: {
    id: string;
    name: string;
    creator: string;
    price: number;
    description: string;
    image: number;
    bids: {
      id: string;
      name: string;
      price: number;
      image: number;
      date: string;
    }[];
  };
};
