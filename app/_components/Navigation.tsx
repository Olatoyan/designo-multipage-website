import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo-dark.png";

function Navigation() {
  return (
    <header className="px-[14rem] py-[6.4rem]">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image
            src={Logo}
            alt="Designo Logo"
            width="196"
            height="24"
            quality={100}
          />
        </Link>

        <ul className="flex items-center gap-[4.2rem]">
          <li className="text-[1.4rem] uppercase leading-[100%] tracking-[0.2rem] text-[#333136]">
            <Link href="/">Our company</Link>
          </li>
          <li className="text-[1.4rem] uppercase leading-[100%] tracking-[0.2rem] text-[#333136]">
            <Link href="/">Locations</Link>
          </li>
          <li className="text-[1.4rem] uppercase leading-[100%] tracking-[0.2rem] text-[#333136]">
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
