import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";

export default async function MoviePage({ params }) {
   const movieId = params.id;
   const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);
   const movie = await res.json();
   return (
      <div className="w-full">
         <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
            <Image
               src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
               width={500}
               height={300}
               alt="movie poster"
               style={{ width: '100%', height: '100%' }}
               className="rounded-lg">
            </Image>
            <div className="p-2">
               <h2 className="text-lg mb-3 font-bold">{movie.title || movie.name}</h2>
               <p className="text-lg mb-3">{movie.overview}</p>
               <p className="mb-3">
                  <span className="font-semibold mr-1">Date Released:</span>
                  {movie.release_date || movie.first_air_date}</p>
               <p className="flex items-center">
                  <span className="font-semibold mr-1">Rating:</span>
                  {movie.vote_count} <AiOutlineLike className="ml-1" /></p>
            </div>
         </div>
      </div>
   )
}
