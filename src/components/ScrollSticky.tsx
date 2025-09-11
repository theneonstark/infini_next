"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

type Section = {
  heading: { tag: string; text: string };
  description: string;
  image: string;
};

export default function ScrollSticky({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const items = refs.current.map((el, i) => ({ el, i })).filter((x) => x.el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = items.findIndex((it) => it.el === entry.target);
            if (idx !== -1) {
              setActive(idx); // Update active index when section is visible
            }
          }
        });
      },
      { root: null, threshold: 0.5 } // Half visible hone par trigger
    );

    items.forEach(({ el }) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const renderHeading = (tag: string, text: string) => {
    switch (tag.toLowerCase()) {
      case "h1":
        return <h1 className="text-3xl font-bold text-white">{text}</h1>;
      case "h2":
        return <h2 className="text-2xl font-semibold text-white">{text}</h2>;
      case "h3":
        return <h3 className="text-xl font-medium text-white">{text}</h3>;
      default:
        return <h2 className="text-2xl font-semibold text-white">{text}</h2>;
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full">
      {/* Left: Text content */}
      <div className="w-full md:w-1/2">
        {sections.map((sec, i) => (
          <section
            key={i}
            ref={(el) => (refs.current[i] = el)}
            className={`scroll-section min-h-[70vh] py-10 flex flex-col justify-center ${
              i === sections.length - 1 ? "pb-32" : ""
            }`}
          >
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {renderHeading(sec.heading.tag, sec.heading.text)}
              <p className="leading-7 text-white mt-4">{sec.description}</p>
            </div>
          </section>
        ))}
      </div>

      {/* Right: Sticky image */}
      <div className="w-full md:w-1/2">
        <div className="sticky top-24 h-[70vh] rounded-2xl overflow-hidden shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={sections[active]?.image ?? "fallback"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="relative h-full w-full"
            >
              <Image
                src={sections[active]?.image ?? "/placeholder.svg"}
                alt={`Section image ${active + 1}`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile image */}
        <div className="mt-4 md:hidden">
          <Image
            src={sections[active]?.image ?? "/placeholder.svg"}
            alt={`Section image mobile ${active + 1}`}
            width={1200}
            height={800}
            className="w-full h-64 object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
