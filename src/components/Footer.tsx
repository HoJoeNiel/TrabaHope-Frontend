import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={`w-full bg-gray-800 h-[150px] px-12 py-4 ${className}`}>
      <div className="flex items-center space-x-2 text-white font-bold mb-5">
        {/* temporary app logo */}
        <div className="p-2 text-sm shadow gradient-bg rounded-xl">
          <span>TH</span>
        </div>
        <h3 className="text-xl ">TrabaHope</h3>
      </div>
      <p className={`text-gray-300 ${className && "text-white"}`}>
        Making job searches smarter and more efficient with AI-powered matching.
      </p>
      <div
        className={`flex space-x-4 text-gray-400 mt-6 ${
          className && "text-white"
        }`}
      >
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />
      </div>
    </footer>
  );
}
