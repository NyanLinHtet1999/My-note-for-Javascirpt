'use client'

import MovieDetail from "@/app/components/Movie/MovieDetail"
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import { useDispatch, useSelector } from "react-redux";
import { selectMovies } from "@/lib/redux/slices/movieSlice/selectors";
import { getMovieById } from "@/lib/redux/slices/movieSlice/selectors";
import { useRouter } from "next/navigation";

export default function MoviePage({params} : {params : {id : string}}) {   
  const movies = useSelector(selectMovies);
  const movie = getMovieById(movies, params.id);
  const router = useRouter();
  const btnBackHandler = () => {
    router.push('/movie')
  }
     return (<>
        <MovieDetail movie = {movie}/>
        <button type={"button"}
                className = {"btn btn-primary"} 
                onClick= {btnBackHandler}>
                Back
        </button>
     </>)
   }