import { Link } from 'react-router-dom'

export default function ListItem ({ id, image, item_type }) {
  return(
    <>
      <div style={{ margin: "8px" }}>
        <Link 
          to={`/${item_type}/${id}` }
        >
          <img width="192" height="288" src={ "https://image.tmdb.org/t/p/w500" + image} alt="Movie poster" />
        </Link>
      </div>
    </>
  )
}