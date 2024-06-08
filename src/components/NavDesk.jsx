function NavDesk() {
  return (
    <nav
      id="nav-desk"
      className="w-full hidden px-10 py-5 nav-fixed rounded-b-sm sm:flex flex-row items-center justify-between"
    >
      <ul className="nav-list">
        <li>
          <a href="/" className="nav-link">
            paints
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            samples
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            gallery
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            faq
          </a>
        </li>
      </ul>

      <ul className="nav-list">
        {/* <li>
          <a href="/" className="nav-link">
            calculator
          </a>
        </li> */}
        <li>
          <a href="/" className="nav-link">
            sign in
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            cart
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavDesk;
