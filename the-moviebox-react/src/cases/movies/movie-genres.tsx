import { useEffect, useState } from "react"
import type { MovieDTO } from "./services/movie.service";

type MovieGenresProps = {
    movie: MovieDTO
}

export function MovieGenres({
    movie 
}: MovieGenresProps) {

    const [genres, setGenres] = useState<string[]>([]); 

    useEffect(() => {
        if (movie && movie.genres) {
            setGenres(movie.genres.split(',')) 
        }
    }, [movie])

    return (
        <div className="text-sm my-3 flex flex-wrap items-center gap-2">
            {genres.map((genre, index) => (
                <span key={index} className="bg-white/20 px-3 py-1 rounded-full">
                    {genre.trim()}
                </span>
            ))}
        </div>
    )
}