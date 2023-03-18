import Image from "next/image";
import coconut from "../../../public/coconut.png";
export default function Card() {
  return (
    <div className="shadow-lg rounded-2xl m-5 p-5">
      <>
        <Image
          src={coconut}
          style={{ objectFit: "contain", height: "250px" }}
          alt="Home"
        />
        <div className="">
          <span className="card-title">100% Cow Milk</span>
          <br />
          <span className="card-qty font-bold  text-green-800">₹ 60/L</span>
          <span className="card-qty line-through text-sm text-red-500">
            ₹ 70/L
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
