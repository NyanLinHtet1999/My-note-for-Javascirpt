import { useDispatch } from "react-redux";
import * as Yup from 'yup';
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field } from 'formik';
import Button from "react-bootstrap/Button";
import { deleteMovieAsync, getAllMovieAsync, saveMovieAsync , updateMovieAsync } from "@/lib/redux/slices/movieSlice/thunks";

export default function NewOrUpdateMovieModal(props : {show : boolean,
     handleClose : () => void , 
     movieToUpdate ?: Movie }) {
       let dispatch = useDispatch();
       let {movieToUpdate} = props;
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
           <Modal.Title>{props.movieToUpdate ? "Update Movie" : "New Movie"}</Modal.Title>
         </Modal.Header>
         <Modal.Body>
             <Formik
         initialValues={{
           title: movieToUpdate ? movieToUpdate.title : "",
           year: movieToUpdate ? movieToUpdate.year : "",
           director: movieToUpdate ? movieToUpdate.director.name : "",
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
           if(movieToUpdate) {
             console.log("movieToUpdate" , movieToUpdate);
             let updatedMovie = {
               ...movieToUpdate,
               title : movie.title,
               year : movie.year,
               director : director
             }
             console.log("updatedMovie", updatedMovie);
             dispatch(updateMovieAsync(updatedMovie)).unwrap()
                                             .then(result => props.handleClose());
           }else {
             dispatch(saveMovieAsync(movie)).unwrap()
                                          .then(result => props.handleClose());
           }
           
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
           <button type="submit" className="btn btn-primary mt-2">
             {movieToUpdate ? "Edit" : "Submit"}
           </button>
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