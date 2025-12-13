import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="transition-colors duration-300 bg-[#BDB6AC] h-20 lg:h-screen flex lg:flex-col flex-row items-center justify-center gap-3 lg:px-0 px-10">
      <NavLinks />
    </nav>
  );
};

export default Navbar;
