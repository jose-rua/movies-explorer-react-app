import { useOutletContext } from "react-router"
import ListItem from "../ListItem/ListItem"

export default function Series() {
    const context = useOutletContext()

    return(
        <>
            <h1>Series Top Rated</h1>
            <div className="flex flex-row m-4">
                {context.series_top_rated.map((element) => <ListItem key={element.id} image={element.poster_path} />)}
            </div>

            <h1>Series Popular</h1>
            <div className="flex flex-row m-4">
                {context.series_popular.map((element) => <ListItem key={element.id} image={element.poster_path} />)}
            </div>
        </>
    )
}