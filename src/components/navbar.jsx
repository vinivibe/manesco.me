import React from 'react';
import Link from 'next/link'
import { Navbar as MTNavbar, Collapse, Button, IconButton, Typography } from '@material-tailwind/react';
import { RectangleStackIcon, XMarkIcon, Bars3Icon, AcademicCapIcon, PhoneIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
const NAV_MENU = [
  {
    id: 1,
    name: 'Home',
    icon: RectangleStackIcon,
    href: '#home' // Assuming client-side route
  },
  {
    id: 2,
    name: 'Resume',
    icon: AcademicCapIcon,
    href: '#resume' // External link
  },
  {
    id: 3,
    name: 'Contact',
    icon: PhoneIcon,
    href: '#contact' // Assuming client-side route
  },
];


const NavItem = ({ name, Icon, href }) => {
  const isExternal = href.startsWith('http');
  return (
    <li>
      <Link href={href} passHref>
          <Typography
            color="gray"
            className="flex items-center gap-2 font-medium text-gray-900"
          >
            { Icon && <Icon className="h-5 w-5" /> }
            {name}
          </Typography>
      </Link>
    </li>
  );
};

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Image src="https://i.postimg.cc/mZ8kw1YY/logo.png" alt="Logo" width={50} height={50} />
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map((item) => (
            <NavItem name={item.name} Icon={item.icon} href={item.href} key={item.id} />
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
        <Link href="https://wa.me/+5511989781100?text=Vim%20pelo%20seu%20portfólio,%20vamos%20bater%20um%20papo?">
            <Button color='green' >WhatsApp</Button>
          </Link>
        </div>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? <XMarkIcon strokeWidth={2} className="h-6 w-6" /> : <Bars3Icon strokeWidth={2} className="h-6 w-6" />}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map((item) => (
              <NavItem name={item.name} Icon={item.icon} href={item.href} key={item.id} />
            ))}
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
