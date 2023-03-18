import Image from "next/image";
import coconut from "../../public/coconut.png";
import Card from "@/components/card";
export default function Home() {
  return (
    <div className="md:grid md:grid-rows-3 md:grid-flow-col gap-4">
      {[1, 2, 3, 4, 56, 1, 1, 1].map((e) => (
        <Card />
      ))}
      <button className="fixed bottom-7  right-0 grid place-items-center place-self-center px-6 py-2 text-lg transition-colors duration-300 shadow-xl text-lime-400 bg-cyan-800 rounded-l-2xl hover:bg-cyan-600 shadow-cyan-700">
        Proceed to Pay
      </button>
    </div>
  );
}
