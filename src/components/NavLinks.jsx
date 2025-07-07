import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "about", text: "about" },
  { id: 3, url: "products", text: "products" },
  { id: 4, url: "cart", text: "cart" },
  { id: 5, url: "checkout", text: "checkout" },
  { id: 6, url: "orders", text: "orders" },
];

const NavLinks = () => {
  const user = useSelector((state) => state.userState.user);
  const baseClass = "px-4 py-2 block";
  const activeClass = "bg-neutral font-semibold text-neutral-content";
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        if ((url === "checkout" || url === "orders") && !user) return null;
        return (
          <li key={id}>
            <NavLink
              // className="capitalize"
              to={url}
              className={({ isActive }) =>
                `capitalize ${baseClass} ${isActive ? activeClass : ""}`
              }
            >
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
export default NavLinks;
