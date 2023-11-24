"use client"
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import MovieUI from "./MovieUI";



export default function MovieList(props : {movies : Movie[],
                                 editHandler : (movie : Movie) => void ,
                                 movieToUpdate ?: Movie}) {
  let {movies} = props;
  return (
    <div>
      {movies.map((movie) => (
        <MovieUI key={movie._id} movie={movie} editHandler = {props.editHandler}></MovieUI>
      ))}
    </div>
  );
}
