import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 600 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-4 mb-4 flex flex-row gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Youtube
        </a>
      </Typography>
      <Typography
        as="li"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Tiktok
        </a>
      </Typography>
      <Typography
        as="li"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );

  return (
      <Navbar className="bg-transparent text-white border-transparent shadow-none backdrop-filter-none sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 ">
        <div className="flex items-center justify-between">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer  text-xl  xsm:text-lg font-bold"
          >
            Allan.Io
          </Typography>
          {navList}
          <div className="flex items-center gap-4 ">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Log In</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Sign in</span>
              </Button>
            </div>
          </div>
        </div>

      </Navbar>

  );
}

export default  StickyNavbar