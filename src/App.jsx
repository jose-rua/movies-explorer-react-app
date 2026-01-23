import './App.css'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './Navbar/Navbar'

import { 
  fetchMoviesSearch, fetchSeriesSearch,
  fetchMoviesTopRated, fetchMoviesPopular,
  fetchSeriesTopRated, fetchSeriesPopular
} from './Api/TmdbApi'


function App() {
  const [search, setSearch] = useState("");

  const [movies_search, setMoviesSearch] = useState([])
  const [series_search, setSeriesSearch] = useState([])

  const [movies_top_rated, setMoviesTopRated] = useState([])
  const [movies_popular, setMoviesPopular] = useState([])

  const [series_top_rated, setSeriesTopRated] = useState([])
  const [series_popular, setSeriesPopular] = useState([])

  useEffect(() => {
    console.log("USE EFFECT")
    console.log("");

    if(search) {
      fetchMoviesSearch(search).then(data => setMoviesSearch(data))
      fetchSeriesSearch(search).then(data => setSeriesSearch(data))
    } else {
      fetchMoviesTopRated().then(data => {
        setMoviesTopRated(data)
        setMoviesSearch(data)
      })

      fetchMoviesPopular().then(data => setMoviesPopular(data))

      fetchSeriesTopRated().then(data => {
        setSeriesTopRated(data)
        setSeriesSearch(data)
      })

      fetchSeriesPopular().then(data => setMoviesPopular(data))
    }
  }, [search])

  function handleSearch(e) {
    e.preventDefault();

    if(search) {
      fetchMoviesSearch(search).then(data => setMoviesSearch(data))
      fetchSeriesSearch(search).then(data => setSeriesSearch(data))
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

      <Outlet 
        context={{ 
          movies_top_rated: movies_top_rated,
          movies_popular: movies_popular,
          movies_search: movies_search,
          series_search: series_search,
        }} 
      />
    </>
  )
}

export default App
