import { createContext } from "react";

interface iLoginContext {
  mainHeading1: string;
  mainHeading2: string;
  subHeading: string;
  formFields: {
    name: string;
    pageKey: string;
    type: string;
    min?: number;
    max?: number;
  }[];
}
const loginContext = createContext<iLoginContext>({
  mainHeading1: "FRESH MILK",
  mainHeading2: "EVERY DAY",
  subHeading: "BETWEEN 6-8 AM",
  formFields: [
    {
      name: "Phone Number",
      pageKey: "user-phone-number",
      type: "tel",
      min: 10,
      max: 10,
    },
  ],
});

export default loginContext;
