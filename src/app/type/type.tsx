export interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: any;
  rating: Rating;
}
interface Rating {
  rate: number;
  count: number;
}
