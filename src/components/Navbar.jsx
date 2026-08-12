import { Link } from "react-router-dom";

function Navbar() {
    return (

        <nav className="bg-slate-900 
        text-white px-8 py-4 shadow-lg">
<div className="max-w-6xl
max-auto flex justify-between items-center">
    <h1 className="text-2xl font-bold text-blue-400">
        MY WEBSITE
    </h1>
    <div className="flex gap-9">
<Link to="/home"
className="hover:text-blue-400 transition">
     Home</Link>

<Link to="/about"
className="hover:text-blue-400 transition">
   About</Link>

<Link to="/contact"
className="hover:text-blue-400 transition">

Contact</Link>
</div></div>
        </nav>

    );
}
 export default Navbar;