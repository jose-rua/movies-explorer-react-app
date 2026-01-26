import { useEffect, useState } from "react"
import { fetchSerie } from "../Api/TmdbApi"
import { useParams } from "react-router"


export default function Serie() {
  let { id } = useParams()

  const [serie, setSerie] = useState({})

  useEffect(() => {
    fetchSerie(id).then(data => setSerie(data))
  }, [id])

  const title = serie.name
  const posterUrl = serie.poster_path ? `https://image.tmdb.org/t/p/w500${serie.poster_path}` : null
  const backdropUrl = serie.backdrop_path ? `https://image.tmdb.org/t/p/w1280${serie.backdrop_path}` : null
  const rating = serie.vote_average?.toFixed(1)

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

                {serie.overview && (
                    <div>
                        <h2 className="text-xl font-bold mb-3">Sinopse</h2>
                        <p className="text-gray-300 leading-relaxed line-clamp-4 md:line-clamp-none">
                            {serie.overview}
                        </p>
                    </div>
                )}
            </div>
      </div>
    </div>
  )
}