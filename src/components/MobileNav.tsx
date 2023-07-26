import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MobileNav = () => {
  const sliderLinkClass =
    "before:content-[''] before:w-0 before:bg-white hover:before:w-full before:ease-linear before:duration-500 before:absolute before:-top-2 before:left-0 before:h-[1.5px] after:content-[''] after:w-0 after:bg-white hover:after:w-full after:ease-linear after:duration-500 after:absolute after:-bottom-2 after:right-0 after:h-[1.5px] relative";
  const sliderButtonClass =
    "border border-primary md:hidden border-opacity-30 dark:border-white dark:border-opacity-30 p-2 relative hover:text-white dark:hover:text-primary before:-z-10 before:content-[''] dark:before:bg-white before:bg-primary before:absolute before:left-0 before:w-0 hover:before:w-full before:top-0 before:h-full before:ease-linear before:duration-500 before:transition-all ease-linear duration-500 transition-all text-lg font-semibold rounded-sm";
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className={sliderButtonClass}
        id="mobile-menu"
        aria-label="Open Menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          {!isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          )}
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute w-full top-[76px] left-0 bg-white dark:bg-primary bg-opacity-70 dark:bg-opacity-70 rounded-b-2xl z-50 p-4 shadow-xl md:hidden"
            initial={{ y: "-100vw" }}
            animate={{ y: 0 }}
            exit={{ y: "-100vw" }}
            transition={{ duration: 0.5 }}
          >
            <ul className="flex flex-col items-center justify-center gap-9">
              <li>
                <a href="/" className={sliderLinkClass}>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className={sliderLinkClass}>
                  About Me
                </a>
              </li>
              <li>
                <a href="/projects" className={sliderLinkClass}>
                  Projects
                </a>
              </li>
              <li>
                <a href="/blog" className={sliderLinkClass}>
                  Blog
                </a>
              </li>
              <li>
                <button className={sliderButtonClass} aria-label="Contact Me">
                  Contact Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
