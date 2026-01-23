import { useOutletContext } from "react-router"
import ListItem from "../ListItem/ListItem"

export default function Homepage () {
    const context = useOutletContext()

    return(
       <>
            <h1>Movies</h1>
            <div className="flex flex-row m-4">
                {context.movies_search.map((element) => <ListItem key={element.id} id={element.id} image={element.poster_path} item_type="movies" />)}
            </div>

            <h1>Series</h1>
            <div className="flex flex-row m-4">
                {context.series_search.map((element) => <ListItem key={element.id} id={element.id} image={element.poster_path} item_type="series" />)}
            </div>
        </>
    )
}