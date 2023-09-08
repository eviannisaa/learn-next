import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-white font-semibold py-3 px-6 w-4/5 flex justify-between drop-shadow m-auto rounded-lg mt-2 text-[black]">
      <div className="text-lg">
         <Link href="/">Nav</Link>
      </div>
      <div className="flex gap-6 text-sm">
         <Link href="/home">Home</Link>
         <Link href="/about">About</Link>
         <Link href="/contact">Contact</Link>
      </div>
    </div>
  )
}
