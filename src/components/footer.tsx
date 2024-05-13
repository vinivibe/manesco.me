import Image from 'next/image';
import { Typography } from "@material-tailwind/react";

const LINKS = [
  { name: "Email", id: 1, href: "mailto:manesco@gmail.com", icon: "/image/icons/gmail.png" },
  { name: "Linkedin", id: 2, href: "https://www.linkedin.com/in/joaomanesco/", icon: "/image/icons/linkedin.png" },
  { name: "Instagram", id: 3, href: "https://www.instagram.com/jfmanesco/", icon: "/image/icons/instagram.png" },
];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} Made with <a href="https://jobo.com.br" target="_blank" rel="noopener noreferrer">jobo.com.br</a>

          </Typography>
          <ul className="flex gap-8 items-center">
            {LINKS.map(link => (
              <li key={link.id}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" title={link.name}>
                  <Image src={link.icon} alt={link.name} width={24} height={24} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

