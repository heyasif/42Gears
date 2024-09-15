"use client"; // Add this line at the very top

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path
      ? "flex items-center space-x-4 p-4 bg-white shadow-md rounded-md"
      : "flex items-center space-x-4 p-4 hover:bg-gray-200 rounded-md";

  return (
    <aside className="bg-gray-200 w-64 min-h-screen p-4">
      <nav className="space-y-4">
        <Link href="/" className={linkClass("/")}>
          <Image
            src="/icons/Menu_Icon1.svg"
            alt="Menu 1"
            width={24}
            height={24}
          />
          <span className="text-gray-800 font-semibold">Menu 1</span>
        </Link>
        <Link href="/page2" className={linkClass("/page2")}>
          <Image
            src="/icons/Menu_Icon2.svg"
            alt="Menu 2"
            width={24}
            height={24}
          />
          <span className="text-gray-800 font-semibold">Menu 2</span>
        </Link>
        <Link href="/page3" className={linkClass("/page3")}>
          <Image
            src="/icons/Menu_Icon3.svg"
            alt="Menu 3"
            width={24}
            height={24}
          />
          <span className="text-gray-800 font-semibold">Menu 3</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
