export default function ListItem ({ image }) {
  return(
    <>
      <div style={{ margin: "8px" }}>
        <img width="192" height="288" src={ "https://image.tmdb.org/t/p/w500" + image} alt="Movie poster" />
      </div>
    </>
  )
}