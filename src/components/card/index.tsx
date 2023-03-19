import Image from "next/image";
import coconut from "../../../public/coconut.png";
import { iCardSingleProduct } from "@/context/products.context";

export default function Card({
  discount,
  imageUrl,
  isAvailable,
  name,
  sellingPrice,
  description,
}: iCardSingleProduct) {
  return (
    <div className="shadow-lg mobile:w-auto max-w-md rounded-2xl m-5 p-5">
      <>
        <Image
          src={imageUrl}
          width={100}
          height={100}
          style={{ objectFit: "contain", width: "100%", height: "250px" }}
          alt="Home"
        />
        <div className="">
          <span className="card-title">{name}</span>
          <br />
          <span className="card-qty font-bold  text-green-800">
            ₹ ${sellingPrice}
          </span>
          <span className="card-qty line-through text-sm text-red-500">
            ₹ ${sellingPrice - discount}
          </span>
          <br />

          <br />
          <div className="flex pb-2 justify-center">
            <button className="btn mr-5"> Add to cart</button>
            <button className="btn ml-5 subscription">Subscribe</button>
          </div>
        </div>
      </>
    </div>
  );
}
