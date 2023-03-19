import { createContext } from "react";

export interface iCardSingleProduct {
  name: string;
  sellingPrice: number;
  discount: number;
  isAvailable: boolean;
  imageUrl: string;
  description?: string;
}
interface iProducts {
  cartValue: number;
  cartTotalProduct: number;
  cartMeta: {
    products: iCardSingleProduct[];
  };
}
const productContext = createContext<iProducts>({
  cartValue: 2000,
  cartMeta: {
    products: [
      {
        name: "Pure Cow Milk",
        discount: 10,
        isAvailable: true,
        sellingPrice: 65,
        imageUrl: "http://localhost:3000/cow.gif",
      },
      {
        name: "Pure Buffalow Milk",
        discount: 10,
        isAvailable: true,
        sellingPrice: 75,
        imageUrl: "http://localhost:3000/buffalo.gif",
      },
      {
        name: "Fresh Cocunut",
        discount: 10,
        isAvailable: true,
        sellingPrice: 65,
        imageUrl: "http://localhost:3000/coconut.png",
      },
    ],
  },
  cartTotalProduct: 20,
});

export default productContext;
