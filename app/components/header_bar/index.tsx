import Link from "next/link";

export default function HeaderBar() {
  return (
    <header className="w-full bg-white shadow-sm border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Title */}
          <Link
            href="/"
            className="flex items-starthover:opacity-80 transition"
          >
            <h1 className="text-2xl font-bold text-zinc-900">
              One App Calculator
            </h1>
          </Link>

          {/* Navigation/Actions */}
          <nav className="hidden md:flex space-x-8">
            {/* <a
              href="#"
              className="text-zinc-600 hover:text-zinc-900 transition"
            >
              Favorites
            </a> */}
            <Link
              href="/pages/settings"
              className="text-zinc-600 hover:text-zinc-900 transition"
            >
              Settings
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-md text-zinc-600 hover:bg-zinc-100">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
