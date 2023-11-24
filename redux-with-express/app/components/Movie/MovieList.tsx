"use client"
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import MovieUI from "./MovieUI";



export default function MovieList(props : {movies : Movie[]}) {
  let {movies} = props;
  return (
    <div>
      {movies.map((movie) => (
        <MovieUI key={movie._id} movie={movie}></MovieUI>
      ))}
    </div>
  );
}
