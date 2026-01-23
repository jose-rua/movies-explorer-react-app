import './App.css'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './Navbar/Navbar'

import { fetchMoviesTopRated, fetchMoviesPopular, fetchSearchMovies } from './Api/TmdbApi'


function App() {
  const [search, setSearch] = useState("");
  const [movies_top_rated, setMoviesTopRated] = useState([])
  const [movies_popular, setMoviesPopular] = useState([])

  useEffect(() => {
    if(!search) {
      fetchMoviesTopRated().then(data => setMoviesTopRated(data))
      fetchMoviesPopular().then(data => setMoviesPopular(data))
    }
  }, [search])

  function handleSearch(e) {
    e.preventDefault();

    if(search) {
      fetchSearchMovies(search).then(data => setMoviesTopRated(data))
      fetchMoviesPopular().then(data => setMoviesPopular(data))
    } else {
      fetchMoviesTopRated().then(data => setMoviesTopRated(data))
      fetchMoviesPopular().then(data => setMoviesPopular(data))
    }
  }

  return (
    <>
      <Navbar
        search={search}
        setSearch={(e) => setSearch(e.target.value)}
        handleSearch={(e) => handleSearch(e)}
      />
      <Outlet context={{movies_top_rated: movies_top_rated, movies_popular: movies_popular }}/>


    </>
  )
}

export default App
