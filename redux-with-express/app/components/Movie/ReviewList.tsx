import Review from "@/lib/redux/slices/reviewSlice/Review";
import styles from './movie.module.css'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css' 
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'


function ReviewUi(props : {
  key : string,
  review : Review ,
  editHandler : (review : Review) => void;
  deleteHandler : (review : Review) => void;
}) {
     const [rating, setRating] = useState(props.review.rating) ;
      const editReviewBtn = () => {
        props.editHandler(props.review)
      } 
      const deleteReviewBtn = () => {
        console.log("Deleting");
        props.deleteHandler(props.review)
      }
      useEffect(() => {
        setRating(props.review.rating)
      }, [props.review.rating]);

  return ( 
    <div className = {styles.movieContainer}>
      <div>{props.review.review}</div>
      <div>{props.review.rating}</div>
      <Rating style={{ maxWidth: 80}} value ={rating}/>
      <span onClick={editReviewBtn} className="mx-3">
        <FontAwesomeIcon icon={faPencil} />
      </span>
      <span onClick= {deleteReviewBtn}>
        <FontAwesomeIcon icon={faTrash} />
      </span>
    </div>

  );
}

export default function ReviewList(props: { 
    reviews: Review[],
    editHandler : (review : Review) => void;
    deleteHandler : (review :Review) => void;
       }) {
  let { reviews, editHandler,deleteHandler } = props;
  console.log("reviews in reviewList ", reviews);
  return (
    <div>
      {reviews.map((review) => (
        <ReviewUi key={review._id} review={review} editHandler= {editHandler} deleteHandler={deleteHandler}></ReviewUi>
      ))}
    </div>
  );
}
