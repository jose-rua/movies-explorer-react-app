import { useEffect, useState } from "react"
import { fetchMovie } from "../Api/TmdbApi"
import { useParams } from "react-router"


export default function Movie() {
  let { id } = useParams()

  const [movie, setMovie] = useState({})

  useEffect(() => {
    fetchMovie(id).then(data => setMovie(data))
  }, [id])

  const title = movie.title
  const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null
  const backdropUrl = movie.backdrop_path ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}` : null
  const rating = movie.vote_average?.toFixed(1)

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-12">
        <div className="flex flex-row">
            {posterUrl && (
                <div>
                    <img
                    src={posterUrl} 
                    alt={title}
                    width="300px"
                    />
                </div>
            )}

            <div style={{ "paddingLeft": "20px" }}>
                <h1 className="text-4xl md:text-5xl font-black mb-4">{title}</h1>
                
                <div className="flex">
                    {rating && (
                    <div>
                        <span className="text-yellow-500 text-2xl">⭐</span>
                        <span className="text-lg font-bold">{rating}/10</span>
                    </div>
                    )}
                </div>

                {movie.overview && (
                    <div>
                        <h2 className="text-xl font-bold mb-3">Sinopse</h2>
                        <p className="text-gray-300 leading-relaxed line-clamp-4 md:line-clamp-none">
                            {movie.overview}
                        </p>
                    </div>
                )}
            </div>
      </div>
    </div>
  )
}