import Logo from "@/public/logo-light.png";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-[#1d1c1e] px-[14rem] pb-28 pt-[14.4rem]">
      <nav className="flex items-center justify-between border-b border-solid border-white border-opacity-10 pb-16">
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
          <li className="text-[1.4rem] uppercase leading-[100%] tracking-[0.2rem] text-white hover:underline">
            <Link href="/about">Our company</Link>
          </li>
          <li className="text-[1.4rem] uppercase leading-[100%] tracking-[0.2rem] text-white hover:underline">
            <Link href="/location">Locations</Link>
          </li>
          <li className="text-[1.4rem] uppercase leading-[100%] tracking-[0.2rem] text-white hover:underline">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-end gap-12 pt-12">
        <address className="w-full max-w-[35rem] text-[1.6rem] not-italic leading-[2.6rem] text-white opacity-50">
          <span className="font-bold opacity-100">Designo Central Office</span>{" "}
          <br />
          <span>3886 Wellington Street</span> <br />
          <span>Toronto, Ontario M9C 3J5</span>
        </address>

        <div className="w-full max-w-[35rem] text-[1.6rem] font-bold leading-[2.6rem] text-white opacity-50">
          <span>Contact Us (Central Office):</span> <br />
          <span>
            <Link href="tel:+1 253-863-8967">P: +1 253-863-8967</Link>
            <br />
          </span>
          <span>
            <Link href="mailto:contact@designo.co">M: contact@designo.co</Link>
          </span>
        </div>
        <ul className="ml-auto flex items-center gap-6">
          <li>
            <Image
              src="/shared/desktop/icon-facebook.svg"
              alt="Facebook"
              width="24"
              height="24"
            />
          </li>
          <li>
            <Image
              src="/shared/desktop/icon-youtube.svg"
              alt="youtube"
              width="24"
              height="24"
            />
          </li>
          <li>
            <Image
              src="/shared/desktop/icon-twitter.svg"
              alt="twitter"
              width="24"
              height="24"
            />
          </li>
          <li>
            <Image
              src="/shared/desktop/icon-pinterest.svg"
              alt="pinterest"
              width="24"
              height="24"
            />
          </li>
          <li>
            <Image
              src="/shared/desktop/icon-instagram.svg"
              alt="instagram"
              width="24"
              height="24"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
