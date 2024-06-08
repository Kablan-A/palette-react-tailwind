import main from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="w-full p-9 flex flex-col gap-6">
      <div>
        <hr className="border border-[#1F1E1E1A]"></hr>

        <div className="w-full py-6 grid md:grid-cols-[60%40%]">
          <div className="py-6 flex gap-20 flex-col justify-between text-[#1F1E1E] font-normal">
            <div className="flex flex-col gap-5">
              <p className="text-4xl">
                Sign In now
                <br />
                and stay inspired!
              </p>

              <a href="#">
                <button
                  className="px-2 w-64 h-9 footer-link flex items-center justify-between 
                          border border-[#E0E0E0] hover:shadow-footerSignIn transition-shadow"
                >
                  <span
                    href="#"
                    className="footer-link underline underline-offset-2"
                  >
                    Sign In
                  </span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </a>
            </div>

            <p className="text-xs">
              Non toxic and VOC free, offering exceptional durability, coverage
              and washability
            </p>
          </div>

          <div
            className="p-6 flex flex-col gap-20 items-center justify-between border-t-[1px] border-t-[#1F1E1E1A]
                 md:border-t-0 md:border-l-[1px] md:border-t-[#1F1E1E1A]"
          >
            <div className="grid grid-cols-3 gap-10">
              <ul className="footer-list">
                <li className="footer-link mb-2 hover:no-underline">Shop</li>
                <li>
                  <a href="#" className="footer-link">
                    Paints
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Samples
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Supplies
                  </a>
                </li>
              </ul>

              <ul className="footer-list">
                <li className="footer-link mb-2 hover:no-underline">
                  Discover
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Air purifying
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Pro
                  </a>
                </li>
              </ul>

              <ul className="footer-list">
                <li className="footer-link mb-2 hover:no-underline">About</li>
                <li>
                  <a href="#" className="footer-link">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Shipping & Returns
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="footer-link">
                @Palette.eco
              </a>
              <a href="#" className="footer-link">
                contact@palette.eco
              </a>
            </div>
          </div>
        </div>

        <hr className="border border-[#1F1E1E1A]"></hr>
      </div>

      <img src={main} alt="PALETTE logo" className="w-full" />

      <div className="grid sm:grid-cols-2 place-content-center gap-6">
        <div className="flex sm:self-start items-center gap-24">
          <p className="footer-link hover:no-underline">4.3—5</p>
          <a href="#" className="footer-link">
            We are on Trustpilot
          </a>
        </div>

        <div className="flex sm:place-self-end items-center gap-6 sm:gap-24">
          <a href="#" className="footer-link">
            Terms of service
          </a>
          <a href="#" className="footer-link">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
