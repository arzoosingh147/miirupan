import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0C0C0C] text-white relative">
      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row justify-between gap-8">
        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white ">miirupan</h2>
          <p className="text-gray-300 max-w-md">
            Where freelancers and innovators unite to build something awesome. Collaborate. Create. Grow.
          </p>
        </div>

        {/* Center Navigation */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-lg mb-2">Navigation</h4>
          <a href="/" className="hover:text-[#FF8000] transition">Home</a>
          <a href="/about" className="hover:text-[#FF8000] transition">About</a>
          <a href="/find-work" className="hover:text-[#FF8000] transition">Find Work</a>
          <a href="/contact" className="hover:text-[#FF8000] transition">Contact</a>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Connect</h4>
          <div className="flex gap-4 text-xl">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-[#FF8000] transition" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-[#FF8000] transition" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-[#FF8000] transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-sm text-gray-500 pb-4">
        © {new Date().getFullYear()} Miirupan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
