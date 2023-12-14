export type Course = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  duration: number;
  price: number;
  rating: number;
  createdAt?: Date;
};
