'use client'

import MovieDetail from "@/app/components/Movie/MovieDetail"
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import { useDispatch, useSelector } from "react-redux";
import { selectMovies } from "@/lib/redux/slices/movieSlice/selectors";
import { getMovieById } from "@/lib/redux/slices/movieSlice/selectors";
import { useRouter } from "next/navigation";
import { selectReviews } from "@/lib/redux";
import { useEffect } from "react";
import { getAllReviewsByIdAsync } from "@/lib/redux";
import ReviewList from "@/app/components/Movie/ReviewList";
import { useState } from "react";
import NewOrUpdateReviewModal from "./ReviewModal";
export default function MoviePage({params} : {params : {id : string}}) 
{   
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const reviews = useSelector(selectReviews);
  const movie = getMovieById(movies, params.id);
  const router = useRouter();
  const btnBackHandler = () => {
    router.push('/movie')
  }
  useEffect(() => {
        dispatch(getAllReviewsByIdAsync(movie?._id))
  },[])
  const [show, setShow] = useState(false);
  // const [movieToUpdate, setMovieToUpdate]  = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const editHandler = (movie : Movie) => {
  //   setMovieToUpdate(movie);
  //   handleShow();
  // }
  const newBtnHandler = () =>{
    handleShow();
  }
     return (<>
        <MovieDetail movie = {movie} reviews = {reviews}/>
        <button className ="btn btn-primary mb-3" onClick={newBtnHandler}>New Review</button>
        <ReviewList reviews={reviews}/>
        <button type={"button"}
                className = {"btn btn-primary"} 
                onClick= {btnBackHandler}>
                Back
        </button>
        <NewOrUpdateReviewModal show={show} 
                             handleClose={handleClose} 
                             movieId={movie._id}/>
     </>)
   }