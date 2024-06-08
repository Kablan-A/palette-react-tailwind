import { useEffect } from "react";
import NavMobile from "./NavMobile";
import NavDesk from "./NavDesk";

function Nav() {
  useEffect(() => {
    const navMobile = document.getElementById("nav-mobile");
    const navDesk = document.getElementById("nav-desk");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        navMobile.classList.add("bg-white");
        navDesk.classList.add("bg-[#1F1E1E]");
      } else {
        navMobile.classList.remove("bg-white");
        navDesk.classList.remove("bg-[#1F1E1E]");
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [window.scrollY]);

  return (
    <>
      <NavMobile />
      <NavDesk />
    </>
  );
}

export default Nav;
