"use client";
import { selectMovies } from "@/lib/redux/slices/movieSlice/selectors";
import MovieList from "../components/Movie/MovieList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllMovie } from "@/lib/redux/slices/movieSlice/movieApi";
import { getAllMovieAsync } from "@/lib/redux/slices/movieSlice/thunks";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';

function NewMovieModal(props : {show : boolean,handleClose : () => void }) {
     const movieSchema = Yup.object().shape({
          title: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
          year: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
          director: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
          
        });
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Formik
       initialValues={{
         title: '',
         year: '',
         director: '',
       }}
       validationSchema={movieSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
            {({ errors, touched }) => (
        <form>
          
          <div className="mb-3">
            <label htmlFor="movieTitle" className="form-label">
               Title
            </label>
            <Field name="title"  
                      className="form-control"
                      placeholder="Enter movie title"/>
           {errors.title && touched.title ? (
             <div className=" text-danger">{errors.title}</div>
           ) : null}
          </div>

          <div className="mb-3">
            <label htmlFor="movieYear" className="form-label">
              Year
            </label>
             <Field name="year"  
                      className="form-control"
                      placeholder="Enter movie year"/>
            {errors.year && touched.year ? (
             <div className=" text-danger">{errors.year}</div>
           ) : null}
          </div>

          <div className="mb-3">
            <label htmlFor="movieDirector" className="form-label">
              Director
            </label>
             <Field name="director"  
                      className="form-control"
                      placeholder="Enter movie director"/>
              {errors.director && touched.director ? (
             <div className=" text-danger">{errors.director}</div>
           ) : null}
          </div>

        </form>
          )}
        </Formik>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={props.handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function MoviePage() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  useEffect(() => {
    // fetchAllMovie()
    dispatch(getAllMovieAsync());
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* <button type={"button"} className ={"btn btn-primary mb-2 "}>
          New Movie
     </button> */}
      <Button variant="primary" onClick={handleShow} className={"mb-2"}>
        New Movie
      </Button>

      <MovieList movies={movies} />

      <NewMovieModal show={show} handleClose={handleClose}></NewMovieModal>
    </>
  );
}
