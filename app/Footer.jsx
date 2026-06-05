const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white">
        {/* MAIN GRID */}
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* COLUMN 1 */}
          <div>
            <h2 className="text-lg font-semibold mb-5">Nihongomax Talent</h2>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">FAQs</li>
              <li className="hover:text-white cursor-pointer">Blogs</li>
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h2 className="text-lg font-semibold mb-5">For Employers</h2>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="hover:text-white cursor-pointer">Register</li>
              <li className="hover:text-white cursor-pointer">Prices</li>
              <li className="hover:text-white cursor-pointer">User Guide</li>
              <li className="hover:text-white cursor-pointer jp">採用教育費</li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h2 className="text-lg font-semibold mb-5">Legals</h2>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="hover:text-white cursor-pointer">Terms of Use</li>
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h2 className="text-lg font-semibold mb-5">Contact Us</h2>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>H-4, Hudson Lane, GTB Nagar</li>
              <li>New Delhi 110009, India</li>
              <li className="hover:text-white cursor-pointer">
                nihongomaxtalent@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-700 text-center py-6 px-4">
          <p className="text-gray-400 text-sm">
            © 2026 Nihongomax Talent Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
