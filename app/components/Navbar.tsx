import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5">
      <Link href="/" className="font-bold text-3xl text-primary">
        CTID
      </Link>
      <Link href="/test" className="text-xl">
        Test
      </Link>
    </nav>
  );
}
