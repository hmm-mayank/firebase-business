import Image from "next/image";
import logo from "../../../public/logo.png";
export default function GettingStarted() {
  return (
    <>
      <div className="mobile:backgroundGradient h-screen flex items-center justify-center ease-in duration-300">
        <div className="h-1/2  max-w-7xl rounded-lg overflow-hidden mobile:shadow-sm shadow-2xl flex">
          <div className="mobile:hidden grid place-content-center backgroundGradient  p-4 text-white rounded-lg">
            <h1>
              FRESH MILK <br /> EVERY MORNING
            </h1>
            <h2>BETWEEN 7-8 AM DAILY</h2>
          </div>

          <div className="self-center p-10 mobile:text-white">
            <div className="sm:hidden pb-10">
              <Image src={logo} height={100} width={100} alt="log" />
              <h1>
                FRESH MILK <br /> EVERY MORNING
              </h1>
            </div>

            <h1 className="text-3xl">GET STARTED</h1>
            <div className="flex">
              <input
                type="text"
                className="h-14 pl-2 font-bold  text-black  placeholder:text-slate-300 block bg-white w-full border border-slate-800 rounded-md   shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-lg"
                placeholder="Enter Phone Number..."
              />
              <button className="h-14 btn ">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
