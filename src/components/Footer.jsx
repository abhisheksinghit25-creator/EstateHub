import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 px-6 py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">

        
        <div>
          <Link to="/" className="text-2xl font-bold text-emerald-400">
            🏠 EstateHub
          </Link>
          <p className="mt-3 text-sm text-slate-400">
            Your trusted partner in finding the perfect property. We help you buy, sell, and rent homes with ease.
          </p>
        </div>

        
        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link to="/" className="hover:text-emerald-400">Home</Link></li>
            <li><Link to="/rent" className="hover:text-emerald-400">Rent</Link></li>
            <li><Link to="/buy" className="hover:text-emerald-400">Buy</Link></li>
            <li><Link to="/about" className="hover:text-emerald-400">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-emerald-400">Contact</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>📍 123, MG Road, Mumbai, India</li>
            <li>📞 +91 1234567890</li>
            <li>✉️ info@estatehub.com</li>
            <li>🕐 Mon - Sat: 9AM - 7PM</li>
          </ul>
        </div>

        
        <div>
          <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
          <div className="flex gap-4 text-slate-400">
            <a href="#" className="text-2xl hover:text-emerald-400">𝕏</a>
            <a href="#" className="text-2xl hover:text-emerald-400">📘</a>
            <a href="#" className="text-2xl hover:text-emerald-400">📸</a>
            <a href="#" className="text-2xl hover:text-emerald-400">💼</a>
          </div>
          <h3 className="mb-2 mt-6 text-lg font-semibold">Newsletter</h3>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-lg bg-slate-800 px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold hover:bg-emerald-700">
              Join
            </button>
          </div>
        </div>

      </div>

      
      <div className="mx-auto mt-10 max-w-6xl border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
        © 2026 EstateHub. All rights reserved. | Made with ❤️ in India
      </div>
    </footer>
  );
}
