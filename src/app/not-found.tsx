import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center w-full h-screen gap-1">
      Page not found. Go back to
      <Link href="/" className="font-bold underline" aria-label="Home">
        Homepage
      </Link>
    </div>
  );
}
