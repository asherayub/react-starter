import {
  FaXTwitter,
  FaInstagram,
  FaBehance,
  FaLinkedinIn,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-[#111111] px-20 pt-4 relative overflow-y-hidden isolate">
      <div className="blob absolute w-96 h-80 bg-secondary rounded-full -translate-x-1/2 left-1/2 top-32 -z-10  filter blur-3xl opacity-20"></div>
      <div className="container p-6 mx-auto z-20">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <a href="#">
                <img src="../../assets/logo.svg" alt="" />
              </a>
              <div className="flex gap-4 items-center text-2xl my-2 ">
                <a href="#">
                  <FaXTwitter />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaBehance />
                </a>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </div>

              <div className="flex mt-6 -mx-2">
                <a href="#" aria-label="X.com"></a>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-white mb-4">Quick Links</h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-muted hover:underline"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-muted hover:underline"
                >
                  Pricing Table
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-muted hover:underline"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-muted hover:underline"
                >
                  Meet Our Team
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-muted hover:underline"
                >
                  Latest News
                </a>
              </div>

              <div>
                <h3 className="text-white mb-4">Company</h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-muted hover:underline"
                >
                  Case Study
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-muted hover:underline"
                >
                  FAQ&apos;s
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-muted hover:underline"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-muted hover:underline"
                >
                  Customer Support
                </a>
              </div>

              <div>
                <h3 className="text-white mb-4">Legal</h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-muted hover:underline"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-muted hover:underline"
                >
                  Terms of Use
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Web Olympus. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
