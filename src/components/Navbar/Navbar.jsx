import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` transition-colors duration-300 ${
        scrolled ? "lg:bg-white bg-gray-100  " : "bg-white"
      } h-20 lg:h-screen flex lg:flex-col flex-row items-center justify-center gap-3`}
    >
      <NavLinks />
    </nav>
  );
};

export default Navbar;
