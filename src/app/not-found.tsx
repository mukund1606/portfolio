import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-[100dvh] w-full items-center justify-center gap-1">
      Page not found. Go back to
      <Link href="/" className="font-bold underline" aria-label="Home">
        Homepage
      </Link>
    </div>
  );
}
