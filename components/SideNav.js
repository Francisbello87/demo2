import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import gsap from 'gsap';

const SideNav = () => {
  // const router = useRouter();
  const navRef = useRef(null);
  useEffect(() => {
    const navLinks = navRef.current.querySelectorAll('a');

    const glitchEffect = (target) => {
      gsap.fromTo(
        target,
        {
          x: 0,
        },
        {
          x: 'random(-10, 10)',
          repeat: -1,
          yoyo: true,
          duration: 0.5,
          ease: 'power2.inOut',
        }
      );
    };

    navLinks.forEach((link) => {
      link.addEventListener('mouseenter', () => glitchEffect(link));
    });
  }, []); 
  return (
    <div ref={navRef} className=' text-white rotate-180 px-10 text-opacity-60 sideNav text-sm  flex gap-5'>
        <a href='#'>
            TWITTER
        </a>
        <a href='#'>
            INSTAGRAM
        </a>
        <a href='#'>
           DISCORD
        </a>
    </div>
  )
}

export default SideNav