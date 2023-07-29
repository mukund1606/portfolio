"use client";
import Image from "next/image";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";

// Utils
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultrices, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget aliquam ultrices, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.",
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultrices, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget aliquam ultrices, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.",
    image:
      "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultrices, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget aliquam ultrices, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.",
    image: "",
  },
  {
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultrices, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget aliquam ultrices, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.",
    image:
      "https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4=",
  },
  {
    title: "Project 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultrices, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget aliquam ultrices, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.",
    image: "",
  },
  {
    title: "Project 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultrices, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget aliquam ultrices, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdonQ0huvDLnWeMR08hq80HVGP1-IFLRrUFybwRz1J&s",
  },
];

const ProjectsPage = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="flex justify-center w-full h-screen p-4 pb-32 overflow-hidden xl:p-20 xl:pb-0">
        <div
          id="tilt-element"
          className="xl:w-[80%] relative w-full shadow-md rounded-xl xl:max-h-[80dvh] shadow-white/20"
        >
          <Image
            src="/galaxy.jpg"
            alt="galaxy"
            width={1024}
            height={768}
            className={cn("w-full h-full rounded-xl absolute opacity-30 -z-10")}
            priority
          />
          <div className="flex flex-col items-center w-full h-full p-4 overflow-y-scroll text-center overflow-x-hidden scrollbar-thumb-[#75c2f6]/20 scrollbar-thumb-rounded-full scrollbar-thin scrollbar-track-transparent md:p-12 xl:p-16 gap-5">
            <h1 className="w-full text-5xl font-bold text-transparent bg-yellowGradient bg-clip-text">
              Projects
            </h1>
            <div className="grid w-full grid-cols-1 gap-4 my-auto lg:grid-cols-3 sm:grid-cols-2">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="relative flex flex-col items-center justify-center p-2 prose transition-all duration-300 ease-linear bg-white bg-opacity-0 border border-white prose-invert rounded-xl hover:bg-opacity-10 aspect-video"
                >
                  <h1>{project.title}</h1>
                  <div>
                    <p>
                      {project.description.slice(0, 130)}
                      {"......  "}
                      <span
                        className="pl-2 font-bold underline cursor-pointer"
                        onClick={() => {
                          setData(project);
                          setIsModalOpen(true);
                        }}
                      >
                        Know More
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <AnimatePresence>
            {isModalOpen && (
              <motion.div
                className="absolute inset-0 bg-cover rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="relative w-full h-full bg-stars">
                  <button
                    className="absolute z-50 text-2xl transition-all duration-300 ease-linear top-6 right-6 hover:scale-125"
                    onClick={() => {
                      setIsModalOpen(false);
                      setData({
                        title: "",
                        description: "",
                        image: "",
                      });
                    }}
                  >
                    <AiFillCloseCircle />
                  </button>
                  <div className="absolute inset-0 z-20 flex p-16 justify-center w-full h-ful rounded-xl overflow-y-scroll text-center overflow-x-hidden scrollbar-thumb-[#75c2f6]/20 scrollbar-thumb-rounded-full scrollbar-thin scrollbar-track-transparent">
                    <div className="flex flex-col items-center gap-8 text-center ">
                      <h2 className="text-5xl font-bold text-transparent bg-yellowGradient bg-clip-text">
                        {data.title}
                      </h2>
                      {data.image !== "" && (
                        <div className="flex items-center justify-center">
                          <Image
                            src={data.image}
                            alt={data.title}
                            className="object-cover shadow-sm sm:w-96 w-80 rounded-xl shadow-white/20 aspect-video"
                            width={1024}
                            height={768}
                          />
                        </div>
                      )}
                      <p className="w-[80%] xl:w-[60%]">{data.description}</p>
                    </div>
                  </div>
                  <Image
                    src="/galaxy.jpg"
                    alt="galaxy"
                    width={1024}
                    height={768}
                    className="absolute inset-0 z-10 w-full h-full opacity-40 rounded-xl"
                    priority
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
