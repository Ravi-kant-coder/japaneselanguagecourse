"use client";
import Dropdown from "./components/Dropdown";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Talent", href: "/talent" },
    { name: "Max-3", href: "/max-3" },
    { name: "Contact us", href: "/contact" },
  ];

  return (
    <header className="w-full bg-gray-100 shadow-md flex flex-col md:flex-row mx-auto px-4 md:px-16 py-3 items-center justify-between">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Nihongo Max Talent Logo"
            width={180}
            height={60}
            priority
          />
        </Link>
      </div>
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
        <Dropdown />
      </nav>
    </header>
  );
};

export default Header;
