import { Button } from "./Button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sliderlink } from "./SliderLink";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        variant="blue"
        className="p-4"
        aria-label="menu-button"
        onClick={() => setOpen(!open)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          ></path>
        </svg>
      </Button>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            className="fixed z-40 inset-0 flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
          >
            <div className="absolute top-4 right-4 md:right-8">
              <Button
                variant="blue"
                aria-label="close-button"
                onClick={() => setOpen(!open)}
                className="p-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Button>
            </div>
            <ul className="gap-8 text-xl flex flex-col text-center font-bold ">
              <li>
                <Sliderlink href="#home">Home</Sliderlink>
              </li>
              <li>
                <Sliderlink href="#about">About</Sliderlink>
              </li>

              <li>
                <Sliderlink href="#services">Services</Sliderlink>
              </li>
              <li>
                <Sliderlink href="#projects">Projects</Sliderlink>
              </li>
              <li>
                <Sliderlink href="#contact">Contact</Sliderlink>
              </li>
              <li>
                <Sliderlink href="#blog">Blog</Sliderlink>
              </li>
              <li>
                <Button aria-label="cv-button" variant="blue">
                  Download CV
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
