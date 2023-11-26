'use client'

import MovieDetail from "@/app/components/Movie/MovieDetail"
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import { useDispatch, useSelector } from "react-redux";
import { selectMovies } from "@/lib/redux/slices/movieSlice/selectors";
import { getMovieById } from "@/lib/redux/slices/movieSlice/selectors";
import { useRouter } from "next/navigation";
import { selectReviews } from "@/lib/redux";
import { useEffect } from "react";
import { getAllReviewsByIdAsync , deleteReviewAsync } from "@/lib/redux";
import ReviewList from "@/app/components/Movie/ReviewList";
import { useState } from "react";
import NewOrUpdateReviewModal from "./ReviewModal";
import Review from "@/lib/redux/slices/reviewSlice/Review";
import Swal from 'sweetalert2'

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
  const [reviewToUpdate, setReviewToUpdate]  = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const editHandler = (review : Review) => {
    setReviewToUpdate(review);
    handleShow();
  }
  const newBtnHandler = () =>{
    handleShow();
  }
  const deleteHandler = (review : Review) =>{
    Swal.fire({
      title: "Are you sure you want to delete this?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("deleting ", review);
        dispatch(deleteReviewAsync(review))
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
     return (<>
        <MovieDetail movie = {movie} reviews = {reviews}/>
        <button className ="btn btn-primary mb-3" onClick={newBtnHandler}>New Review</button>
        <ReviewList reviews={reviews} editHandler= {editHandler} deleteHandler ={deleteHandler}/>
        <button type={"button"}
                className = {"btn btn-primary"} 
                onClick= {btnBackHandler}>
                Back
        </button>
        <NewOrUpdateReviewModal show={show} 
                             handleClose={handleClose} 
                             movieId={movie._id}
                             reviewToUpdate = {reviewToUpdate}
                             />
     </>)
   }