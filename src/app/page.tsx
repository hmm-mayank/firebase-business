"use client";
import { useEffect } from "react";
import GettingStarted from "@/components/gettingStarted";

export default function Home() {

  useEffect(()=>{
    if(navigator.geolocation){
      console.log(navigator.geolocation.getCurrentPosition((e)=>{
        console.log(e)
      }))
    }
  },[])
  return (
    <div className="">
      {/* {[1, 2, 3, 4, 56, 1, 1, 1].map((e) => (
        <Card />
      ))} */}
      <GettingStarted
      pageKey={"user-delivery-form"}
        mainHeading1={"Enter Address"}
        mainHeading2={"FOR delivery"}
        subHeading={"Hero is Here"}
        formInfo={[
          {
            name: "Phone Number",
            key: "user-phone-number",
            type: "tel",
            min: 10,
            max: 10,
          },
          { name: "Address", key: "user-delivery-address", type: "text" },
          {
            name: "city",
            disable: true,
            key: "user-delivery-city",
            type: "text",
          },
          {
            name: "state",
            disable: true,
            key: "user-delivery-state",
            type: "text",
          },
          {
            name: "Pin Code",
            disable: true,
            key: "user-delivery-pinCode",
            type: "tel",
            min: 6,
            max: 6,
          },
        ]}
      />

      <button className="fixed bottom-8 inline-flex h-16 w-max right-0  place-items-center place-self-center p-5  text-lg transition-colors duration-300 shadow-xl text-lime-400 bg-cyan-800 rounded-l-2xl hover:bg-cyan-600 shadow-cyan-700">
        <svg
          className="h-8 w-8 m-1"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />{" "}
          <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
        </svg>
        <span>Proceed to Pay ₹ 100</span>
      </button>
    </div>
  );
}
