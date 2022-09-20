import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import { IoIosPeople } from "react-icons/io";
import { IoPersonAddSharp } from "react-icons/io5";
import { GrUserSettings } from "react-icons/gr";
import { BsFillUnlockFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdLocationOn } from "react-icons/md";

interface ServiceDataType {
  icon: React.ReactElement;
  heading: string;
  url: string;
}

const serviceData: Array<ServiceDataType> = [
  {
    icon: <IoPersonAddSharp className="text-[3rem]" />,
    heading: "Sign up",
    url: "signup",
  },
  {
    icon: <BsFillUnlockFill className="text-[3rem]" />,
    heading: "Sign in",
    url: "signin",
  },
  {
    icon: <IoIosPeople className="text-[3rem]" />,
    heading: "Employeers",
    url: "employee",
  },
  {
    icon: <GrUserSettings className="text-[3rem]" />,
    heading: "admin",
    url: "admin",
  },
  {
    icon: <TbTruckDelivery className="text-[3rem]" />,
    heading: "package delivery",
    url: "package",
  },
  {
    icon: <MdLocationOn className="text-[3rem]" />,
    heading: "entry path location",
    url: "entry",
  },
];

const App: React.FC = (): JSX.Element => {
  return (
    <main className="w-full mx:h-[100vh] h-auto  ">
      <Header />
      <section className=" container mx-auto  xs:flex block p-4 justify-between mt-20 relative font-['Bebas_Neue'] ">
        <section className=" xs:h-[700px] xs:mb-0 h-auto mb-5 sx:px-10  relatvie flex items-center justify-center flex-col	 ">
          <div>
            <h1 className="text-black md:text-[3rem] text-[2rem] font-semibold  tracking-[4px]">
              Your trusted{" "}
              <span className="xs:text-red-400 text-white">delivery</span>{" "}
              partner
            </h1>
            <br />
            <h2 className="text-left  tracking-[2px] xs:text-zinc-500 text-white opacity-60">
              Experience fastest service.
            </h2>
          </div>
        </section>
        <section className=" relatvie flex items-center justify-center">
          <img
            className="w-[600px] h-auto max-h-[600px] "
            src={process.env.REACT_APP_UPLOAD_URL + "delivery-boy.png"}
            alt="delivery ss"
          />
          <div className="lg:w-[500px] lg:h-[500px] md:w-[300px] md:h-[300px] md:block hidden raduis-[50%] w-[320px] h-[320px] absolute rounded-full bg-blue-200 -z-20"></div>
        </section>
      </section>

      <section className=" h-[500px] py-10 px-4 container  mx-auto xs:mt-32 ">
        <section className="container text-center md:grid gap-4 xl:grid-cols-4 md:grid-cols-2 flex flex-col">
          {serviceData.map(
            (data: ServiceDataType, idx: number): JSX.Element => {
              console.log(data);
              return (
                <a
                  href={data.url}
                  key={idx}
                  className="block p-6 w-full bg-secondary rounded-lg  border-gray-200 shadow-md"
                >
                  <div className="w-full h-auto flex justify-center my-4">
                    {data.icon}
                  </div>
                  <h5 className="mb-2 text-medium  text-black tracking-[2px] font-['Bebas_Neue']">
                    {data.heading}
                  </h5>
                </a>
              );
            }
          )}
        </section>

      </section>
      <div className="absolute w-0 md:w-full bottom-0  left-0 -z-50">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,160L40,181.3C80,203,160,245,240,245.3C320,245,400,203,480,186.7C560,171,640,181,720,197.3C800,213,880,235,960,240C1040,245,1120,235,1200,197.3C1280,160,1360,96,1400,64L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div
        style={{
          clipPath: "ellipse(85% 100% at 50% 0%)",
        }}
        className="absolute w-full md:w-0 top-0  h-[300px] left-0 -z-50 block box-border bg-[#0099ff]	  "
      ></div>
      <Footer />
    </main>
  );
};

export default App;
