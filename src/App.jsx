import './App.css'
import { Outlet, useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './Navbar/Navbar'

import { 
  fetchMoviesSearch, fetchSeriesSearch,
  fetchMoviesTopRated, fetchMoviesPopular,
  fetchSeriesTopRated, fetchSeriesPopular
} from './Api/TmdbApi'


function App() {
  const [searchParams] = useSearchParams()
  const querySearch = searchParams.get('q') || ''
  const [search, setSearch] = useState(querySearch);

  const [movies_search, setMoviesSearch] = useState([])
  const [series_search, setSeriesSearch] = useState([])

  const [movies_top_rated, setMoviesTopRated] = useState([])
  const [movies_popular, setMoviesPopular] = useState([])

  const [series_top_rated, setSeriesTopRated] = useState([])
  const [series_popular, setSeriesPopular] = useState([])

  useEffect(() => {
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

  return (
    <>
      <Navbar
        search={search}
        setSearch={(e) => setSearch(e.target.value)}
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
