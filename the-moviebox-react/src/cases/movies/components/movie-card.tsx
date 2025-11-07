import type { MovieDTO } from "../services/movie.service"

type MoviecardProps = {
    movie: MovieDTO
}
export function Moviecard ({
    movie
}: MoviecardProps){
    return (
        <div className="bg-[#222] rounded-lg shadown-md overflow-hidden cursor-pointer transition hover:shadown-xl hover:translate-y-1">
            <img 
                className="w-full h-[300px] object-cover"
                src={movie.image} 
            />
            <h3 
                className="px-4 pt-4 text-white text-lg font-semibold"
            >
                {movie.title}
            </h3>
            <p 
                className="px-4 pb-4 text-[#ccc] text-sm"
            >
                {movie.year}
            </p>

        </div>
    )
}