"use client";
import { selectMovies } from "@/lib/redux/slices/movieSlice/selectors";
import MovieList from "../components/Movie/MovieList";
import { useDispatch, useSelector } from "react-redux";

export default function MoviePage() {
     const dispatch = useDispatch();
     const movies = useSelector(selectMovies);
     console.log("movies", movies);
     return (<>
          <MovieList movies = {movies}/>
     </>)
   }