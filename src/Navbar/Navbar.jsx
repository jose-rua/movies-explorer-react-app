import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ search, setSearch, handleSearch }) {
  return(
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50 mr-4">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link 
              to={`/`}
              style={{ textDecoration: 'none', color: 'inherit' }}
              className="text-2xl font-black text-red-600 hover:text-red-400 transition"
            >
              Movies & Series Explorer
            </Link>
          </div>

          <div className="flex gap-6 items-center flex-1">
            <Link 
              to={`/movies`}
              style={{ textDecoration: 'none', color: 'inherit' }}
              className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg font-bold text-sm shadow-md hover:shadow-lg transform hover:scale-105 transition duration-200 uppercase"
            >
              🍿 Movies
            </Link>
            <button className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold text-sm transition duration-200 uppercase">
              📺 Series
            </button>
          </div>

          <form onSubmit={handleSearch} className="flex gap-2 flex-shrink-0">
            <input 
              value={search}
              onChange={setSearch}
              placeholder="Pesquisar..."
              className="px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 transition w-48"
            />
            <button 
              type="submit"
              className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition duration-200"
            >
              🔍
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}