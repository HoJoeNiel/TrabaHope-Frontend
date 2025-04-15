import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 h-[200px] p-12">
      <div className="flex items-center space-x-2 text-white font-bold mb-5">
        {/* temporary app logo */}
        <div className="p-2 text-sm shadow gradient-bg rounded-xl">
          <span>TH</span>
        </div>
        <h3 className="text-xl ">TrabaHope</h3>
      </div>
      <p className="text-gray-300">
        Making job searches smarter and more efficient with AI-powered matching.
      </p>
      <div className="flex space-x-4 text-gray-400 mt-6">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />
      </div>
    </footer>
  );
}
