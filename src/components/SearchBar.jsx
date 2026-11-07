
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("buy");

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(location, type);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-3xl flex-col gap-3 rounded-2xl bg-white p-3 shadow-xl sm:flex-row"
    >
      <label className="flex-1">
        <span className="sr-only">Location</span>
        <input
          type="search"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter city or locality"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
        />
      </label>

      <label>
        <span className="sr-only">Listing type</span>
        <select
          value={type}
          onChange={(event) => setType(event.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 sm:w-36"
        >
          <option value="buy">Buy</option>
          <option value="rent">Rent</option>
        </select>
      </label>

      <button
        type="submit"
        className="rounded-xl bg-emerald-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-800"
      >
        Search
      </button>
    </form>
  );
}