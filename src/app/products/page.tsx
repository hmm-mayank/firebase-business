"use client";

import Image from "next/image";
import coconut from "../../public/coconut.png";
import Card from "@/components/card";
import { useContext } from "react";
import productContext from "@/context/products.context";
import Navbar from "@/components/header";
export default function Products() {
  const { cartMeta, cartTotalProduct, cartValue } = useContext(productContext);
  return (
    <>
     <Navbar fixed={true} />
    <div className="container mx-auto">
     
      <div className="flex flex-wrap">
        {cartMeta.products.map((e) => (
          <Card {...e} />
        ))}
        <button className="fixed bottom-7  right-0 grid place-items-center place-self-center px-6 py-2 text-lg transition-colors duration-300 shadow-xl text-lime-400 bg-cyan-800 rounded-l-2xl hover:bg-cyan-600 shadow-cyan-700">
          {`Proceed to Pay ${cartValue} -  ${cartTotalProduct}`}
        </button>
      </div>
    </div>
    </>
  );
}
