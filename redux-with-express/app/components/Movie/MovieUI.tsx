
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import styles from './movie.module.css'
import { useRouter } from "next/navigation";

export default function MovieUI(props: {movie : Movie ,
                       editHandler : (movie: Movie) => void,
                       deleteHandler : (movie : Movie) => void}) {
     let {movie} = props;
     let route = useRouter();
     const movieDetailBtnHandler = () => {
          route.push(`/movie/${movie._id}`)
     }
     const movieEditBtnHandler = () => {
         props.editHandler(movie);
     }
     const deleteBtnHandler = () => {
      props.deleteHandler(movie)
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
                  &nbsp;
          <button type={"button"} 
                  className="btn btn-success btn-sm "
                  onClick={movieEditBtnHandler} >Edit</button> 
                   &nbsp;
          <button type={"button"} 
                  className="btn btn-danger btn-sm "
                  onClick={deleteBtnHandler} >Delete</button> 
      </div>
    </div>
  );
}
