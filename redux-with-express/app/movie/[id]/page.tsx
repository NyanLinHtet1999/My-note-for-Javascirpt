'use client'

import MovieDetail from "@/app/components/Movie/MovieDetail"
import Movie from "@/lib/redux/slices/movieSlice/Movie";

const movie : Movie =  {
     _id: "653563057efc828b80bcf6f4",
     title: "Friends",
     director: {
       name: "Nyan",
       phoneNo: "09787452857",
       _id: "653563057efc828b80bcf6f5",
     },
     year: 1995,
   };

export default function MoviePage({params} : {params : {id : string}}) {   
     return (<>
        <MovieDetail movie = {movie}/>
     </>)
   }