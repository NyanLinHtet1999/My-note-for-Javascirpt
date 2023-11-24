"use client";
import { selectMovies } from "@/lib/redux/slices/movieSlice/selectors";
import MovieList from "../components/Movie/MovieList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllMovie } from "@/lib/redux/slices/movieSlice/movieApi";
import { getAllMovieAsync, saveMovieAsync } from "@/lib/redux/slices/movieSlice/thunks";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import Movie from "@/lib/redux/slices/movieSlice/Movie";

function NewMovieModal(props : {show : boolean,handleClose : () => void }) {
    let dispatch = useDispatch()
     const movieSchema = Yup.object().shape({
          title: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
          year: Yup.number()
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
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        let director = {
          name : values.director,
        }
        let movie:Movie = {
          title : values.title,
          year : values.year,
          director : director
        }
        dispatch(saveMovieAsync(movie)).unwrap()
                                       .then(result => props.handleClose());
      }}
    >
         {({ errors, touched }) => (
      <Form>
        <label htmlFor="title" className="form-label">Title</label>
        <Field id="title" name="title" placeholder="Enter Title" className="form-control"/>
        {errors.title && touched.title ? (
             <div className=" text-danger">{errors.title}</div>
           ) : null}

        <label htmlFor="year" className="form-label">Year</label>
        <Field id="year" name="year" placeholder="Enter Year" className="form-control"/>
        {errors.year && touched.year ? (
             <div className=" text-danger">{errors.year}</div>
           ) : null}

        <label htmlFor="director" className="form-label">Director</label>
        <Field
          id="director"
          name="director"
          placeholder="Enter Director"
          className="form-control"
        />
        {errors.director && touched.director ? (
             <div className=" text-danger">{errors.director}</div>
           ) : null}

        
        <Modal.Footer>
        <button type="submit" className="btn btn-primary mt-2">Submit</button>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        {/* <Button variant="primary" onClick={props.handleClose}>
          Save Changes
        </Button> */}
      </Modal.Footer>
      </Form>
         )}
    </Formik>
        
      </Modal.Body>
    
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
