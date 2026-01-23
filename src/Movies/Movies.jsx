import { useOutletContext } from "react-router"
import ListItem from "../ListItem/ListItem"

export default function Movies() {
    const context = useOutletContext()

    return(
        <>
            <h1>Movies Top Rated</h1>
            <div className="flex flex-row m-4">
                {context.movies_top_rated.map((element) => <ListItem key={element.id} image={element.poster_path} />)}
            </div>

            <h1>Movies Popular</h1>
            <div className="flex flex-row m-4">
                {context.movies_popular.map((element) => <ListItem key={element.id} image={element.poster_path} />)}
            </div>
        </>
    )
}