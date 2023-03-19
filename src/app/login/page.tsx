"use client";
import { useContext, useEffect } from "react";
import GettingStarted from "@/components/gettingStarted";
import loginContext from "@/context/login.context";

export default function Login() {
  const { mainHeading1, mainHeading2, formFields, subHeading } =
    useContext(loginContext);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((e) => {
        console.log(e);
      });
    }
  }, []);
  return (
    <GettingStarted
      pageKey="login-form"
      mainHeading1={mainHeading1}
      mainHeading2={mainHeading2}
      subHeading={subHeading}
      formInfo={formFields}
    />
  );
}
