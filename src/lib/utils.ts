import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(...inputs));
};

export const tilt = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  elementRef: React.RefObject<HTMLDivElement>
) => {
  const x = e.clientX;
  const y = e.clientY;
  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;
  const offsetX = ((x - middleX) / middleX) * 45;
  const offsetY = ((y - middleY) / middleY) * 45;
  // @ts-ignore
  elementRef.current?.style?.setProperty("--rotateX", offsetX + "deg");
  // @ts-ignore
  elementRef.current?.style?.setProperty("--rotateY", -1 * offsetY + "deg");
};
