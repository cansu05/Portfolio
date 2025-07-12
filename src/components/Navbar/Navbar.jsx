import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="bg-white h-20 lg:h-screen  flex lg:flex-col flex-row items-center justify-center gap-3">
      <NavLinks />
    </nav>
  );
};
export default Navbar;
