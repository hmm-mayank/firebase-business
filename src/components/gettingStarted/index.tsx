import Image from "next/image";
import logo from "../../../public/logo.png";
interface IHeroDesgin {
  mainHeading1: string;
  mainHeading2: string;
  subHeading: string;
  pageKey: string;
  formInfo: {
    name: string;
    pageKey: string;
    type: string;
    disable?: boolean;
    min?: number;
    max?: number;
  }[];
}
export default function GettingStarted({
  pageKey,
  mainHeading1,
  mainHeading2,
  subHeading,
  formInfo,
}: IHeroDesgin) {
  return (
    <>
      <div
        key={pageKey || "page"}
        className="mobile:backgroundGradient h-screen flex items-center justify-center ease-in duration-300"
      >
        <div
          key={pageKey + "main-div"}
          className="mobile:h-auto h-1/2  max-w-7xl rounded-lg overflow-hidden mobile:shadow-sm shadow-2xl flex"
        >
          <div
            key={pageKey + "main-div-mobile-hidden"}
            className="mobile:hidden grid place-content-center backgroundGradient  p-4 text-white rounded-lg"
          >
            <h1 key={pageKey + "h1"}>
              {mainHeading1} <br /> {mainHeading2}
            </h1>
            <h2 key={pageKey + "h2"}>{subHeading}</h2>
          </div>

          <div
            key={`${pageKey}${mainHeading1}`}
            className="self-center p-10 mobile:text-white"
          >
            <div key={pageKey + "hide-in-sm"} className="sm:hidden pb-0">
              <Image src={logo} height={50} width={50} alt="log" />
              <h1 key={pageKey + "merger-mobile"}>
                {mainHeading1} <br /> {mainHeading2}
              </h1>
            </div>

            <h1 key={pageKey + "GET STARTED"} className="text-3xl">
              GET STARTED
            </h1>
            <div
              key={pageKey + "form-render"}
              className="grid grid-flow-row mb-11"
            >
              {formInfo.length > 0 &&
                formInfo?.map((e, id) => (
                  <input
                    type={e.type}
                    key={e.pageKey + id}
                    minLength={e.min || 200}
                    maxLength={e.max || 200}
                    className="txt-input"
                    disabled={e.disable || false}
                    placeholder={`Enter  ${e.name}...`}
                  />
                ))}
              <button
                key={pageKey + "submit btn"}
                className="h-14 btn mt-2 border border-blue-500 border-solid"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
