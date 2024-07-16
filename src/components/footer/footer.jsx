"use client";
import "./footer.scss";
import LinkHover from "../linkHover/LinkHover";
import { usePathname } from "next/navigation";
import border from "@/images/yellow_footer_border.svg";
import Image from "next/image";
const footerUrls = [
  {
    url1: "#",
    url1Text: "About",
    url2: "#",
    url2Text: "Annual Return",
  },
  {
    url1: "#",
    url1Text: "Corporate Social Responsibility",
    url2: "#",
    url2Text: "Vigil Mechanism Policy",
  },
  {
    url1: "#",
    url1Text: "Career",
    url2: "#",
    url2Text: "Privacy Policy",
  },
  {
    url1: "#",
    url1Text: "Copyright 2024",
    url2: "#",
    url2Text: "kgm group",
  },
  {
    url1: "tel:9900000000",
    url1Text: "+91 9900000000",
    url2: "mailto:info@kgmgroup.com",
    url2Text: "info@kgmgroup.com",
  },
];

const Footer = () => {
  const pathname = usePathname();
  console.log("url", pathname);
  return (
    (pathname === "/" || pathname === "/store") && (
      <footer>
        <nav>
          {footerUrls.map((item, index) => (
            <ul key={index}>
              <li>
                <LinkHover
                  url={item.url1}
                  text={item.url1Text}
                  color={"#fff"}
                  borderColor={"white"}
                  fontSize={"16px"}
                />
              </li>
              <li key={index}>
                <LinkHover
                  url={item.url2}
                  text={item.url2Text}
                  color={"#fff"}
                  borderColor={"white"}
                  fontSize={"16px"}
                />
              </li>
            </ul>
          ))}
        </nav>
        <Image src={border} alt="border" />
        <div className="copyright">© 2024 All Rights Reserved</div>
      </footer>
    )
  );
};
export default Footer;
