import { Pagination } from "src/entity/pagination";

export interface ProductOne {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductMany extends Pagination {
  products: ProductOne[];
}
