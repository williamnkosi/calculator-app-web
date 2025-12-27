"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-col gap-6">
        {/* Page Title */}
        <div className="border-b-2 border-zinc-800 pb-2">
          <h1 className="text-3xl font-semibold text-zinc-800">Settings</h1>
        </div>

        {/* Theme Toggle */}
        <div className="bg-white border border-zinc-200 rounded-lg p-6 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-zinc-900">Theme</h3>
            <p className="text-sm text-zinc-600 mt-1">
              Switch between light and dark mode
            </p>
          </div>

          {/* Toggle Switch */}
          <button
            onClick={toggleTheme}
            className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
              theme === "dark" ? "bg-zinc-900" : "bg-zinc-300"
            }`}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                theme === "dark" ? "translate-x-7" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        {/* Current Theme Display */}
        <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-6">
          <p className="text-sm text-zinc-600">
            Current Theme:{" "}
            <span className="font-semibold text-zinc-900 capitalize">
              {theme}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
