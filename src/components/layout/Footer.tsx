import { Film, Mail, Twitter, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-12 pb-6 text-gray-300 bg-slate-900">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Film className="w-6 h-6 text-indigo-500" />
              <span className="text-xl font-bold text-white">MovieHub</span>
            </div>
            <p className="max-w-md mb-6 text-gray-400">
              Your ultimate destination for discovering and enjoying the best
              films. Stream, download, and stay updated with the latest
              releases.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.profitableratecpm.com/w204eimrfz?key=c794cfad79e9546b9af7436b74c625a0"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.profitableratecpm.com/w204eimrfz?key=c794cfad79e9546b9af7436b74c625a0"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.profitableratecpm.com/w204eimrfz?key=c794cfad79e9546b9af7436b74c625a0"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.profitableratecpm.com/w204eimrfz?key=c794cfad79e9546b9af7436b74c625a0"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.profitableratecpm.com/w204eimrfz?key=c794cfad79e9546b9af7436b74c625a0"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://www.profitableratecpm.com/w204eimrfz?key=c794cfad79e9546b9af7436b74c625a0"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Movies
                </a>
              </li>
              <li>
                <a
                  href="https://www.profitableratecpm.com/w204eimrfz?key=c794cfad79e9546b9af7436b74c625a0"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  TV Shows
                </a>
              </li>
              <li>
                <a
                  href="https://www.profitableratecpm.com/w204eimrfz?key=c794cfad79e9546b9af7436b74c625a0"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  New & Popular
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.profitableratecpm.com/ntexjdc168?key=c6af297cf5790168b3c0e6bf834ff880"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="https://www.profitableratecpm.com/ntexjdc168?key=c6af297cf5790168b3c0e6bf834ff880"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.profitableratecpm.com/ntexjdc168?key=c6af297cf5790168b3c0e6bf834ff880"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.profitableratecpm.com/ntexjdc168?key=c6af297cf5790168b3c0e6bf834ff880"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  DMCA
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 mt-10 border-t border-gray-800">
          <p className="text-sm text-center text-gray-500">
            © {currentYear} MovieHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
