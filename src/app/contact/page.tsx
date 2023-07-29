import Image from "next/image";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import Link from "next/link";
import "@/styles/links.css";

// Utils
import { cn } from "@/lib/utils";

const ContactPage = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-[calc(100dvh-5rem)] p-4 overflow-hidden">
        <div className="xl:w-[80%] relative w-full shadow-md rounded-xl xl:max-h-[80dvh] h-[50dvh] shadow-white/20">
          <Image
            src="/galaxy.jpg"
            alt="galaxy"
            width={1024}
            height={768}
            className={cn(
              "w-full h-full rounded-xl absolute opacity-30 -z-10 object-cover"
            )}
            priority
          />
          <div className="flex flex-col items-center w-full h-full overflow-y-scroll text-center scrollbar-thumb-[#75c2f6]/20 scrollbar-thumb-rounded-full scrollbar-thin scrollbar-track-transparent md:p-12 p-4 lg:p-16 gap-5">
            <h1 className="w-full text-5xl font-bold text-transparent bg-yellowGradient bg-clip-text">
              Contact Me
            </h1>
            <div className="flex justify-center w-full gap-5 p-4 my-auto">
              <div className="flex flex-wrap items-center justify-center w-full social-icons">
                <Link
                  className="social-icon twitter"
                  href="https://twitter.com/Mukund166"
                >
                  <FaTwitter />
                </Link>
                <Link
                  className="social-icon linkedin"
                  href="https://www.linkedin.com/in/mukund1606/"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  className="social-icon instagram"
                  href="https://www.instagram.com/mukund1606/"
                >
                  <FaInstagram />
                </Link>
                <Link
                  className="social-icon github"
                  href="https://github.com/mukund1606"
                >
                  <FaGithub />
                </Link>
                <Link
                  className="social-icon linktree"
                  href="https://linktr.ee/mukund1606"
                >
                  <SiLinktree />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
