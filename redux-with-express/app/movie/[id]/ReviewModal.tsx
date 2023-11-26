import { useDispatch } from "react-redux";
import * as Yup from 'yup';
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import Review from "@/lib/redux/slices/reviewSlice/Review";
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field } from 'formik';
import Button from "react-bootstrap/Button";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css' 
import { useEffect, useState } from "react";
// import { saveReviewAsync } from "@/lib/redux/slices/reviewSlice/thunks";
import { saveReviewAsync , updateReviewAsync} from "@/lib/redux";

export default function NewOrUpdateReviewModal(props : {show : boolean,
     handleClose : () => void , 
     movieId : String ,
     reviewToUpdate ?: Review}) {
       let dispatch = useDispatch();
       let {reviewToUpdate} = props;
       const [rating, setRating] = useState(0);
       useEffect(() =>{
          if(reviewToUpdate) {
            setRating(reviewToUpdate.rating)
          }else {
            setRating(0)
          }
       }, [reviewToUpdate])
        const reviewSchema = Yup.object().shape({
             review: Yup.string()
               .min(2, 'Too Short!')
               .max(50, 'Too Long!')
               .required('Required'),  
           });
           console.log("reviewToUpdate", reviewToUpdate)
     return (
       <Modal show={props.show} onHide={props.handleClose}>
         <Modal.Header closeButton>
           <Modal.Title>{reviewToUpdate ? "Update Review" : "Add Review" }</Modal.Title>
         </Modal.Header>
         <Modal.Body>

             <Formik
         initialValues={{
           review:  reviewToUpdate ? reviewToUpdate.review : "",
         }}
         validationSchema={reviewSchema}
         onSubmit={async (values) => {
           await new Promise((r) => setTimeout(r, 500));
           let review = {
             review : values.review,
             rating : rating,
             movie : props.movieId
           }
           if(reviewToUpdate) {
            let updatedReview = {
              ...reviewToUpdate,
              review : values.review,
              rating : rating,
              movie : props.movieId
            }
            dispatch(updateReviewAsync(updatedReview)).unwrap()
                                            .then(result => props.handleClose());
          }else {
            dispatch(saveReviewAsync(review)).unwrap()
                                          .then(result => props.handleClose());
          }
           
         }}
       >
            {({ errors, touched }) => (
         <Form>
           <label htmlFor="review" className="form-label">Review</label>
           <Field id="review" name="review" placeholder="Enter review" className="form-control"/>
           {errors.review && touched.review ? (
                <div className=" text-danger">{errors.review}</div>
              ) : null}

          {/* <Rating style={{ maxWidth: 80}} value ={rating}/> */}
          <div className="my-2">
          <label htmlFor="rating" className="form-label mt-2">Rating {rating}</label>
          <Rating style={{ maxWidth: 80}} value={rating} onChange={setRating}/>
          </div>

           <Modal.Footer>
           <button type="submit" className="btn btn-primary mt-2">
             Submit
           </button>
           <Button variant="secondary" onClick={props.handleClose}>
             Close
           </Button>
         </Modal.Footer>
         </Form>
            )}
             </Formik>
         </Modal.Body>
       
       </Modal>
     );
   }