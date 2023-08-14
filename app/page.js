"use client"
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Nav from '@/components/Nav';
import SideNav from '@/components/SideNav';
import Image from 'next/image';
import Bass from '../assets/I.png';
import Scroll from '../assets/Group 427320472.svg';
import BG from '../assets/Demo.svg';

export default function Home() {
  const textRef = useRef(null);
  const svgRef = useRef(null);
  const imageRef = useRef(null);
  const colors = ['#214176', '#20EBF8', '#E5E8E7'];

  const handleTextClick = () => {
    // Scale and pulsate animation for the image
    gsap.to(imageRef.current, {
      scale: 1.1,
      duration: 0.3,
      repeat: 1,
      yoyo: true,
    });

    // Color Change Animation for the text
    const colorTimeline = gsap.timeline();
    colors.forEach((color, index) => {
      colorTimeline.to(textRef.current, {
        duration: 1,
        color: color,
        ease: 'power1.inOut',
      });
    });
  };

  useEffect(() => {
    const svg = svgRef.current;

    // Pulsating Animation for the SVG
    gsap.from(svg, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: 'power2.out',
      repeat: -1,
      yoyo: true,
    });

    // Color Change Animation for the SVG
    const colorTimeline = gsap.timeline({ repeat: -1 }); // Infinite repeat
    colors.forEach((color, index) => {
      colorTimeline.to(svg, {
        duration: 1,
        stroke: color,
        ease: 'power1.inOut',
      });
    });

    return () => {
      colorTimeline.kill();
    };
  }, []);

  return (
    <main
      className="min-h-screen w-full relative"
      style={{ backgroundImage: `url(${BG.src})`, backgroundPosition: "cente", backgroundSize: "cover",  }}
    >
      <Nav />
      <SideNav />
      {/*  */}
      <div className="flex flex-col z-40 items-center justify-center w-full  my-[120px]">
        <div className="flex  items-center my-auto gap-44">
          <span onClick={handleTextClick} className=" flex cursor-pointer items-center flex-col z-50 text-xl">
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
            <p ref={textRef} className=" scale-text uppercase text-opacity-60 text-white">
              Click to feel the Bass
            </p>
          </span>
          <Image ref={imageRef} id="bass-image" src={Bass} />
        </div>
        <div className=" mt-48">
          <Image src={Scroll} />
        </div>
      </div>
    </main>
  );
}
