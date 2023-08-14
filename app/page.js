import Nav from "@/components/Nav";
import SideNav from "@/components/SideNav";
import Image from "next/image";
import Bass from "../assets/I.png";
import Scroll from '../assets/Group 427320472.svg'
import BG from '../assets/Demo.svg'


export default function Home() {
  return (
    <main className="min-h-screen relative" style={{ backgroundImage: `url(${BG.src})` }} >
      <Nav />
      <SideNav />
      {/*  */}
      <div className="flex flex-col z-40 items-center justify-center  my-[120px]">
        <div className="flex  items-center my-auto gap-44">
          <span className=" flex items-center flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="58"
              height="58"
              fill="none"
              viewBox="0 0 58 58"
            >
              <path
                stroke="#fff"
                strokeOpacity="0.5"
                strokeWidth="0.5"
                d="M21.676 8.01l1.411-1.411a8 8 0 0111.314 0l1.411 1.411M7.54 22.146l-1.412 1.412a8 8 0 000 11.313l8.48 8.48m7.068 7.068l1.411 1.411a8 8 0 0011.314 0l8.48-8.48m0-28.272l3.533 3.534 3.534 3.534 1.411 1.412a8 8 0 010 11.313l-1.41 1.411"
              ></path>
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17.494 24.527v9.375m5.625-12.5v15.625m5.625-18.75v21.875m5.625-18.75v15.625m5.625-12.5v9.375"
              ></path>
            </svg>
            <p className=" uppercase text-opacity-60 text-white">
              Click to feel the Bass
            </p>
          </span>
          <Image src={Bass} />
        </div>
        <div className=" mt-24">
        <Image src={Scroll}/>
        </div>
       
      </div>
    </main>
  );
}
