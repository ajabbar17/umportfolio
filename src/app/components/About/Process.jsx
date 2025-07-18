"use client";
import React, { useRef, useEffect } from "react";
import ProcessCard from "./ProcessCard";
import { usePathname } from "next/navigation";

// Main Process Component
const Process = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef(null);
  const wrapperRef = useRef(null);
  const pathname = usePathname();

  // Function to get responsive dimensions
  const getResponsiveDimensions = () => {
    const width = window.innerWidth;
    
    if (width < 640) { // sm
      return { cardWidth: 290, gap: 20 };
    } else if (width < 768) { // md
      return { cardWidth: 320, gap: 24 };
    } else if (width < 1024) { // lg
      return { cardWidth: 490, gap: 32 };
    } else { // xl and above
      return { cardWidth: 600, gap: 60 };
    }
  };

  // Function to calculate scroll distance
  const calculateScrollDistance = () => {
    const container = containerRef.current;
    if (!container) return 0;

    const { cardWidth, gap } = getResponsiveDimensions();
    const totalCards = 5;
    const containerWidth = container.offsetWidth;
    const totalCardsWidth = cardWidth * totalCards + gap * (totalCards - 1);
    const maxScroll = totalCardsWidth - containerWidth;

    return Math.max(0, maxScroll);
  };

  // Function to get responsive scroll multiplier
  const getScrollMultiplier = () => {
    const width = window.innerWidth;
    if (width < 640) return 2; // Slower scroll on mobile
    if (width < 768) return 2.5;
    if (width < 1024) return 3;
    return 3.5; // Faster scroll on desktop
  };

  useEffect(() => {
    let scrollTriggerInstance = null;
    let timeoutId = null;

    // Dynamic import to avoid SSR issues
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      // Kill any existing ScrollTriggers first
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      const container = containerRef.current;
      const cards = cardsRef.current;
      const wrapper = wrapperRef.current;

      if (container && cards && wrapper) {
        // Wait for layout to be ready
        timeoutId = setTimeout(() => {
          // Force a layout recalculation
          container.offsetHeight;

          const maxScroll = calculateScrollDistance();
          const scrollMultiplier = getScrollMultiplier();

          console.log("Process Animation Debug:", {
            containerWidth: container.offsetWidth,
            maxScroll,
            scrollMultiplier,
            pathname,
            screenWidth: window.innerWidth,
          });

          // Only create animation if there's content to scroll
          if (maxScroll > 0) {
            // Reset position first
            gsap.set(cards, { x: 0 });

            scrollTriggerInstance = ScrollTrigger.create({
              trigger: wrapper,
              start: "top top",
              end: `+=${maxScroll * scrollMultiplier}`,
              scrub: 1,
              pin: true,
              pinSpacing: true,
              anticipatePin: 1,
              refreshPriority: -1,
              animation: gsap.to(cards, {
                x: -maxScroll,
                ease: "none",
              }),
              onUpdate: (self) => {
                console.log("ScrollTrigger progress:", self.progress);
              },
              onRefresh: () => {
                console.log("ScrollTrigger refreshed");
                // Recalculate on refresh
                const newMaxScroll = calculateScrollDistance();
                if (newMaxScroll > 0) {
                  gsap.set(cards, { x: 0 });
                }
              },
            });
          }
        }, 500);
      }
    };

    // Wait for next tick to ensure DOM is ready
    const initTimer = setTimeout(() => {
      loadGSAP();
    }, 100);

    // Cleanup function
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (initTimer) clearTimeout(initTimer);
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
      if (typeof window !== "undefined") {
        import("gsap").then(({ gsap }) => {
          gsap.killTweensOf(cardsRef.current);
          if (gsap.ScrollTrigger) {
            gsap.ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
          }
        });
      }
    };
  }, [pathname]);

  // Enhanced resize handler with debouncing
  useEffect(() => {
    let resizeTimeout;
    
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (typeof window !== "undefined") {
          import("gsap").then(({ gsap }) => {
            import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
              gsap.registerPlugin(ScrollTrigger);
              ScrollTrigger.refresh();
            });
          });
        }
      }, 250); // Debounce resize events
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  const processSteps = [
    {
      number: "01",
      title: "Discover",
      description: "Explore goals and audience. Define the creative direction.",
    },
    {
      number: "02",
      title: "Concept",
      description: "Develop visual ideas. Align with brand identity.",
    },
    {
      number: "03",
      title: "Design",
      description: "Craft layouts and visuals. Refine typography and colors.",
    },
    {
      number: "04",
      title: "Refine",
      description: "Test and iterate. Perfect spacing and details.",
    },
    {
      number: "05",
      title: "Deliver",
      description: "Export final assets. Prepare style guides.",
    },
  ];

  return (
    <div className="min-h-screen">
      <div
        ref={wrapperRef}
        className="min-h-[100vh]"
      >
        <div
          ref={containerRef}
          className="min-h-screen flex flex-col w-full items-center gap-6 sm:gap-8 md:gap-10 justify-center px-4 sm:px-6 md:px-8 lg:px-11 overflow-hidden"
        >
          <div className="flex md:flex-row flex-col gap-4 justify-between items-center  w-full border-b-2 pb-2">
            <h1 className="text-4xl sm:text-5xl  text-center lg:text-left lg:text-7xl font-semibold tracking-wide">
              MY DESIGN <br /> PROCESS
            </h1>
            <p className="text-center lg:text-left text-base sm:text-lg md:text-xl lg:text-2xl  w-full md:w-1/3 font-medium text-gray-700">
              Explore my comprehensive design process that transforms ideas into
              impactful digital experiences.
            </p>
          </div>

          <div className="w-full h-full flex items-center">
            <div
              ref={cardsRef}
              className="flex gap-5 sm:gap-6 md:gap-8 lg:gap-10 will-change-transform"
              style={{ width: "max-content" }}
            >
              {processSteps.map((process, index) => (
                <ProcessCard
                  key={index}
                  number={process.number}
                  title={process.title}
                  description={process.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;