import {API_URL} from "@/app/setting/API";
import axios from "@/app/setting/our_axios";
import Movie from "@/lib/redux/slices/movieSlice/Movie";

const API = API_URL+"/movies";

export const fetchAllMovie = async ()=>{
    const result = await axios.get(API);
    const movies = await  result;
    return movies;
}

export const saveMovie = async (movie : Movie)=>{
    console.log(movie);
    const result = await axios.post(API,movie);
    console.log('Save result ',result);
    const movies = await  result;
    return movies;
}