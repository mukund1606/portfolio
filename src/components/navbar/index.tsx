"use client";
import { Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { navData } from "./nav-data";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

function NavBar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prevValue = scrollY.getPrevious();
    if (window.innerWidth < 1024) return;
    if (latest > prevValue) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 z-10 flex items-center lg:left-4 lg:right-auto lg:top-0"
      variants={{
        visible: {
          opacity: 1,
        },
        hidden: {
          opacity: 0,
        },
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{
        type: "spring",
        damping: 100,
        stiffness: 500,
      }}
    >
      <div className="flex w-full flex-row items-center justify-between gap-4 bg-gray-50 p-4 text-black lg:flex-col lg:gap-8 lg:rounded-full lg:py-6">
        <div className="ml-4 flex w-full flex-col lg:hidden">
          <span className="text-sm">Mukund Mittal</span>
          <span className="text-xs text-muted">Full-Stack Developer</span>
        </div>
        <ul className="flex w-full flex-row justify-evenly lg:flex-col lg:gap-4">
          {navData.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={cn(
                  "w-fit text-gray-500 transition-transform duration-1000 ease-in-out hover:rotate-[360deg]",
                  pathname === item.href && "text-gray-900",
                )}
              >
                {<item.icon />}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

export default NavBar;
