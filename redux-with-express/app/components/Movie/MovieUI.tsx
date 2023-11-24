
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import styles from './movie.module.css'
import { useRouter } from "next/navigation";

export default function MovieUI(props: {movie : Movie}) {
     let {movie} = props;
     let route = useRouter();
     const movieDetailBtnHandler = () => {
          route.push(`/movie/${movie._id}`)
     }
  return (
    <div className={styles.movieContainer}>
      <h3>{movie.title}</h3>
      <div>{movie.director.name}</div>
      <div>{movie.year}</div>
      <div>
          <button type={"button"} 
                  className="btn btn-primary btn-sm "
                  onClick={movieDetailBtnHandler} >Detail</button>
          {/* <button type={"button"} 
                  className="btn btn-success btn-sm "
                  onClick={movieDetailBtnHandler} >Edit</button> */}
      </div>
    </div>
  );
}