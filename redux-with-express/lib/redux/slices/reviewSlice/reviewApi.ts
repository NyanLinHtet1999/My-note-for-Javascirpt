import {API_URL} from "@/app/setting/API";
import axios from "@/app/setting/our_axios";
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import Review from "./Review";

const API = API_URL+"/reviews";

export const loadAllReviewById = async (movieId : string)=>{
    const result = await axios.get(API + `/movie/${movieId}`);
    const reviews = await result;
    return reviews;
}

export const saveReview= async (review : Review)=>{
    const result = await axios.post(API, review );
    const reviews = await result;
    return reviews;
}

export const updateReview = async (review : Review)=>{
    const result = await axios.put(API+`/${review._id}`,review);
    const reviews = await  result;
    return reviews;
}

export const deleteReview = async (review : Review)=>{
    const result = await axios.delete(API+`/${review._id}`);
    const movies = await  result;
    return movies;
}