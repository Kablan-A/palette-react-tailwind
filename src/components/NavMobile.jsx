import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";
import { useState } from "react";

function NavMobile() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav
      id="nav-mobile"
      style={{ backgroundColor: showMenu && "#fff" }}
      className="sm:hidden w-full p-5 flex gap-10 flex-col nav-fixed rounded-md"
    >
      <div className="flex w-full items-center justify-between">
        <div
          className="text-[#1F1E1E] text-3xl cursor-pointer"
          onClick={() => setShowMenu(showMenu ? false : true)}
        >
          <FontAwesomeIcon icon={showMenu ? faXmark : faBars} />
        </div>

        <ul className="nav-list">
          <li>
            <a href="/" className="nav-link-mobile">
              sign in
            </a>
          </li>
          <li>
            <a href="/" className="nav-link-mobile">
              cart
            </a>
          </li>
        </ul>
      </div>
      {showMenu && (
        <>
          <img src={logo} alt="Palette logo" />

          <ul className="w-full grid grid-cols-2 place-items-center gap-5">
            <li>
              <a href="/" className="nav-link-mobile">
                paints
              </a>
            </li>
            <li>
              <a href="/" className="nav-link-mobile">
                samples
              </a>
            </li>
            <li>
              <a href="/" className="nav-link-mobile">
                gallery
              </a>
            </li>
            <li>
              <a href="/" className="nav-link-mobile">
                faq
              </a>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
}

export default NavMobile;
