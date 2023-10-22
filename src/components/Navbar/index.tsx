"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiEnvelope,
  HiMiniRectangleStack,
} from "react-icons/hi2";
import { motion } from "framer-motion";

// Utils
import { cn } from "@/lib/utils";

const links = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "tech stack", path: "/tech-stack", icon: <HiRectangleGroup /> },
  { name: "projects", path: "/projects", icon: <HiMiniRectangleStack /> },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
  // {
  //   name: "blogs",
  //   path: "/blogs",
  //   icon: <GiNotebook />,
  // },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="fixed bottom-0 z-40 mt-0 flex h-max w-full flex-col items-center gap-y-4 xl:right-[2%] xl:top-0 xl:h-screen xl:w-16 xl:max-w-md xl:justify-center">
        <div className="flex h-20 w-full items-center justify-between gap-y-10 bg-[#ffffff] bg-opacity-5 px-4 py-8 text-3xl backdrop-blur-sm md:px-40 xl:h-max xl:flex-col xl:justify-center xl:rounded-full xl:px-0 xl:text-xl">
          {links.map((link) => {
            return (
              <motion.div
                key={link.name}
                initial={{ rotate: 0 }}
                animate={
                  pathname === link.path ? { rotate: 360 } : { rotate: 0 }
                }
                transition={
                  pathname === link.path ? { duration: 1 } : { duration: 0 }
                }
              >
                <Link
                  href={link.path}
                  className={cn(
                    pathname === link.path && "text-[#75c2f6]",
                    "flex items-center transition-all duration-200 ease-linear hover:scale-125 ",
                  )}
                  aria-label={link.name}
                >
                  {link.icon}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
