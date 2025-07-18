"use client";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const SmoothScroll = ({ children }) => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      scrollRef.current = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        smoothMobile: true,
        class: "is-reveal",
        getSpeed: true,
        getDirection: true,
      });
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
      }
    };
  }, []);

  return (
    <div ref={containerRef} data-scroll-container>
      {children}
    </div>
  );
};

export default SmoothScroll;
