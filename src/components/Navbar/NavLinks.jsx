import { NavLink } from "react-router";
import { links } from "../../data";

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, href, text, icon } = link;
        return (
          <li key={id} className="flex items-center gap-4 text-lg font-medium ">
            <div>{icon}</div>
            <div>
              <NavLink
                to={href}
                className="text-gray-500 cursor-pointer transition-all duration-300 hover:scale-105 hover:tracking-widest active:text-gray-950"
              >
                {text}
              </NavLink>
            </div>
          </li>
        );
      })}
    </>
  );
};
export default NavLinks;
