"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Japanese Courses", href: "/courses" },
    { name: "Contact us", href: "/contact" },
  ];

  return (
    <header
      className="fixed flex flex-col md:flex-row mx-auto items-center justify-between top-0 left-0 w-full 
    z-50 bg-gray-100 md:px-8 py-4"
    >
      <div className="items-center justify-between hidden md:flex">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Logo-Japanese-language-course.png"
            alt="Nihongo Max Talent Logo"
            width={250}
            height={150}
            priority
          />
        </Link>
      </div>
      <p className="text-bold text-black md:text-2xl">Call NOW - 7678461209</p>
      <nav className="flex flex-wrap md:gap-20 gap-4 text-[14px] md:text-lg font-medium">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 rounded-md transition text-center ${
                isActive
                  ? "text-red-600 border border-red-600 font-semibold"
                  : "text-gray-700 hover:text-red-600"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
