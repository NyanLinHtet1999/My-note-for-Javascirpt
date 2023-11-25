"use client";
import { selectMovies } from "@/lib/redux/slices/movieSlice/selectors";
import MovieList from "../components/Movie/MovieList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllMovie } from "@/lib/redux/slices/movieSlice/movieApi";
import { deleteMovieAsync, getAllMovieAsync, saveMovieAsync , updateMovieAsync } from "@/lib/redux/slices/movieSlice/thunks";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import Swal from 'sweetalert2'
import NewOrUpdateMovieModal from "./NewOrUpdateMovieModal";

export default function MoviePage() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  useEffect(() => {
    // fetchAllMovie()
    dispatch(getAllMovieAsync());
  }, []);
  const [show, setShow] = useState(false);
  const [movieToUpdate, setMovieToUpdate]  = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const editHandler = (movie : Movie) => {
    setMovieToUpdate(movie);
    handleShow();
  }
  const newBtnHandler = () =>{
    setMovieToUpdate(null);
    handleShow();
  }
  const deleteHandler = (movie : Movie) =>{
    Swal.fire({
      title: "Are you sure you want to delete " + movie.title + "?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("deleting ", movie);
        dispatch(deleteMovieAsync(movie))
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
  return (
    <>
      <Button variant="primary" onClick={newBtnHandler}
               className={"mb-2"}>
        New Movie
      </Button>

      <MovieList movies={movies} 
                editHandler = {editHandler} 
                movieToUpdate = {movieToUpdate} 
                deleteHandler = {deleteHandler}/>

      <NewOrUpdateMovieModal show={show} 
                             handleClose={handleClose} 
                             movieToUpdate = {movieToUpdate}>
      </NewOrUpdateMovieModal>
    </>
  );
}
