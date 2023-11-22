import Movie from "./Movie";
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'


export interface MovieSliceState {
     movies : Movie[],
}

const initialState : MovieSliceState =  {
     movies :[ 
          {
          _id: "653563057efc828b80bcf6f4",
          title: "Friends",
          director: {
            name: "Nyan",
            phoneNo: "09787452857",
            _id: "653563057efc828b80bcf6f5",
          },
          year: 1995,
        },
        {
          _id: "653563277efc828b80bcf6f7",
          title: "Narcos",
          director: {
            name: "Lin",
            phoneNo: "09787452856",
            _id: "653563277efc828b80bcf6f8",
          },
          year: 2012,
        },
        {
          _id: "653564547efc828b80bcf6fa",
          title: "Narcos",
          director: {
            name: "Lin",
            phoneNo: "09787452856",
            _id: "653564547efc828b80bcf6fb",
          },
          year: 2012,
        }
          ]
     }
      

   
   export const movieSlice = createSlice({
     name: 'movie',
     initialState,
     // The `reducers` field lets us define reducers and generate associated actions
     reducers: {}
   })