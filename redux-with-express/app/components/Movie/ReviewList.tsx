import Review from "@/lib/redux/slices/reviewSlice/Review";
import styles from './movie.module.css'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css' 
import { useState } from "react";



function ReviewUi(props : {key : string, review : Review}) {
     const [rating, setRating] = useState(props.review.rating) ;
     console.log("rating", rating);

  return ( 
    <div className = {styles.movieContainer}>
      <div>{props.review.review}</div>
      <div>{props.review.rating}</div>
      <Rating style={{ maxWidth: 80}} value ={rating}/>
    </div>
  );
}

export default function ReviewList(props: { reviews: Review[] }) {
  let { reviews } = props;
  console.log("reviews in reviewList ", reviews);
  return (
    <div>
      {reviews.map((review) => (
        <ReviewUi key={review._id} review={review}></ReviewUi>
      ))}
    </div>
  );
}
