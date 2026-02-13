
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

export default function Navbar() {
	const location = useLocation();
  	const isHome = location.pathname === "/";
	return (
    <nav className={`w-full bg-white z-50 ${isHome ? "relative" : "sticky top-0"}`}>
      	<div className="px-8 py-4 flex justify-between items-center border-b border-gray-100">
			<Link to="/" className="text-2xl font-semibold tracking-tight hover:text-blue-600 transition">
				Li Arditi
			</Link>
			<div className="space-x-6 text-md">
				<a href="#allprojects" className="hover:text-blue-600 transition">
				Projects
				</a>
				<a href="#aboutme" className="hover:text-blue-600 transition">
				About Me
				</a>
				<a href="#contact" className="hover:text-blue-600 transition">
				Contact
				</a>
			</div>
      	</div>
      
    </nav>
  );
}