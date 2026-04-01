import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/HomePage.tsx";
import Privacy from "./pages/Privacy.tsx";
import Terms from "./pages/Terms.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white flex flex-col">

        {/* NAV */}
        <nav className="border-b border-zinc-800 px-6 py-4 flex justify-between">
          <Link to="/" className="font-bold">Iron & Proverbs</Link>

          <div className="space-x-4">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </nav>

        {/* ROUTES */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="border-t border-zinc-800 p-6 text-center text-sm text-gray-400">
          <div>© {new Date().getFullYear()} Iron & Proverbs</div>

          <div className="mt-2 space-x-4">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </footer>

      </div>
    </BrowserRouter>
  );
}