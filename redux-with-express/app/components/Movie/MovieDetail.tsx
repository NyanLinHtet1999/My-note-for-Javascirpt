
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import styles from './movie.module.css'
import ReviewList from "./ReviewList";
import Review from "@/lib/redux/slices/reviewSlice/Review";

// const reviews = [
//   {
//       "_id": "65369f1873813ecba2d599fd",
//       "movie": "653563057efc828b80bcf6f4",
//       "rating": 5,
//       "review": "Good",
//   },
//   {
//       "_id": "6561c14d6fe30d9040dcd9ba",
//       "movie": "653563277efc828b80bcf6f7",
//       "rating": 3,
//       "review": "Nice",
//   }
// ]
export default function MovieDetail(props: {
  movie : Movie
  }) {
     let {movie} = props;
  return (<div>
        <div className={styles.movieContainer}>
          <h3>{movie.title}</h3>
          <div>{movie.year}</div>
        </div>
     
    </div>
  );
}
