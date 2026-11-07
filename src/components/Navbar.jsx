import { Link, NavLink } from "react-router-dom";


export default function Navbar() {
    return(
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl bg-white/95 px-5 py-4 text-slate-800 shadow-xl backdrop-blur md:px-8">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-emerald-700">
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1V10Z"
                />
              </svg>
              EstateHub
            </Link>

            <div className="hidden items-center gap-8 text-sm font-medium md:flex">
                <NavLink to="/" end className={({ isActive }) => isActive ? "text-emerald-700" : "hover:text-emerald-700"}>Home</NavLink>
                <NavLink to="/buy" className={({ isActive }) => isActive ? "text-emerald-700" : "hover:text-emerald-700"}>Buy</NavLink>
                <NavLink to="/rent" className={({ isActive }) => isActive ? "text-emerald-700" : "hover:text-emerald-700"}>Rent</NavLink>
                <Link to="/sell" className="hover:text-emerald-700">Sell</Link>
                <Link to="/about us" className="hover:text-emerald-700">About us</Link>
            </div>

            <div className="flex items-center gap-3 text-sm font-semibold">
                <button className="hidden rounded-full px-4 py-2 hover:bg-slate-100 sm:block">Log in</button>
                <button className="rounded-full bg-emerald-700 px-4 py-2 text-white hover:bg-emerald-800">Sign up</button>
            </div>
        </nav>
    )
}
