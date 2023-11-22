"use client"
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import MovieUI from "./MovieUI";
// const movies: Movie[] = [
//   {
//     _id: "653563057efc828b80bcf6f4",
//     title: "Friends",
//     director: {
//       name: "Nyan",
//       phoneNo: "09787452857",
//       _id: "653563057efc828b80bcf6f5",
//     },
//     year: 1995,
//   },
//   {
//     _id: "653563277efc828b80bcf6f7",
//     title: "Narcos",
//     director: {
//       name: "Lin",
//       phoneNo: "09787452856",
//       _id: "653563277efc828b80bcf6f8",
//     },
//     year: 2012,
//   },
//   {
//     _id: "653564547efc828b80bcf6fa",
//     title: "Narcos",
//     director: {
//       name: "Lin",
//       phoneNo: "09787452856",
//       _id: "653564547efc828b80bcf6fb",
//     },
//     year: 2012,
//   },
// ];


export default function MovieList(props : {movies : Movie[]}) {
  let {movies} = props;
  return (
    <div>
      {movies.map((movie) => (
        <MovieUI key={movie._id} movie={movie}></MovieUI>
      ))}
    </div>
  );
}
