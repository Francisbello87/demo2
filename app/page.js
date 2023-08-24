"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Power2 } from "gsap";
import Nav from "@/components/Nav";
import SideNav from "@/components/SideNav";
import Image from "next/image";
import Bass from "../assets/I.png";
import Scroll from "../assets/Group 427320472.svg";
import { LineSVG, BgBox, BgBG, LineSVGDown } from "@/components/SVG";
import BG from "../assets/bg234.svg";
import Slider from "@/components/Slider";

export default function Home() {
  const textRef = useRef(null);
  const svgRef = useRef(null);
  const imageRef = useRef(null);
  const colors = ["#214176", "#20EBF8", "#E5E8E7", "#ef53cd"];

  const handleTextClick = () => {
    const textAnimation = gsap.timeline({ repeat: -1, yoyo: true });
    textAnimation.to(textRef.current, {
      color: colors[3],
      scale: 1.1,
      ease: Power2.easeInOut,
    });

    const svgAnimation = gsap.timeline({ repeat: -1, yoyo: true });
    svgAnimation.to(["#path1", "#path2"], {
      stroke: colors[3],
      duration: 1,
      ease: Power2.easeInOut,
    });

    const imageAnimation = gsap.timeline({ paused: true });
    imageAnimation
      .to(imageRef.current, {
        scale: 1.1,
        opacity: 0.8,
        duration: 0.5,
        ease: Power2.easeInOut,
      })
      .to(imageRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: Power2.easeInOut,
      })
      .to(imageRef.current, {
        scale: 1.05,
        duration: 0.3,
        ease: Power2.easeInOut,
      })
      .to(imageRef.current, {
        scale: 1,
        duration: 0.3,
        ease: Power2.easeInOut,
      });

    imageAnimation.play();
  };

  useEffect(() => {
    handleTextClick();
  }, []);

  return (
    <main
      className="min-h-screen w-full relative bg-[#030014]"
      style={{
        backgroundImage: `url(${BG.src})`,
        backgroundPosition: "cente",
        backgroundSize: "cover",
      }}
    >
      {/* <BgBG /> */}
      <div className=" absolute  top-[389px] left-[69px]">
        <LineSVG />
      </div>
      <div className=" absolute top-0 left-[491.3px]">
        <LineSVGDown />
      </div>
      <Nav />
      <SideNav />
      {/*  */}
      <div className="flex flex-col z-40 items-center justify-center w-full  my-[120px]">
        <div className="flex  items-center my-auto gap-44">
          <div
            onClick={handleTextClick}
            className=" flex cursor-pointer items-center flex-col z-50 text-xl"
          >
            <svg
              ref={svgRef}
              xmlns="http://www.w3.org/2000/svg"
              width="58"
              height="58"
              fill="none"
              viewBox="0 0 58 58"
            >
              <path
                id="path1"
                stroke="#fff"
                strokeOpacity="0.5"
                strokeWidth="0.5"
                d="M21.676 8.01l1.411-1.411a8 8 0 0111.314 0l1.411 1.411M7.54 22.146l-1.412 1.412a8 8 0 000 11.313l8.48 8.48m7.068 7.068l1.411 1.411a8 8 0 0011.314 0l8.48-8.48m0-28.272l3.533 3.534 3.534 3.534 1.411 1.412a8 8 0 010 11.313l-1.41 1.411"
              ></path>
              <path
                id="path2"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17.494 24.527v9.375m5.625-12.5v15.625m5.625-18.75v21.875m5.625-18.75v15.625m5.625-12.5v9.375"
              ></path>
            </svg>
            <p
              ref={textRef}
              className=" scale-text uppercase text-opacity-60 text-white"
            >
              Click to feel the Bass
            </p>
          </div>
          <Image ref={imageRef} id="bass-image" src={Bass} />
        </div>
        <div className="mt-48 over ">
          <div className=" max-w-[450px] overflow-x-auto scrollbar-none ">
            <Slider />
          </div>
        </div>
      </div>
    </main>
  );
}
