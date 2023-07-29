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
import { GiNotebook } from "react-icons/gi";
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
      <nav className="fixed bottom-0 flex flex-col items-center xl:justify-center gap-y-4 h-max mt-0 xl:right-[2%] z-40 xl:top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
        <div className="flex items-center justify-between w-full h-20 px-4 py-8 text-3xl xl:flex-col xl:justify-center gap-y-10 md:px-40 xl:px-0 bg-[#ffffff] bg-opacity-5 backdrop-blur-sm xl:h-max xl:text-xl xl:rounded-full">
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
                    "flex items-center hover:scale-125 transition-all duration-200 ease-linear "
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
