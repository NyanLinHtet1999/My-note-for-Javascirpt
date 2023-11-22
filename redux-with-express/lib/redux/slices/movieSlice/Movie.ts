import Director from "./Director"
export default interface Movie {
     _id : string,
     title : string,
     year : number,
     director : Director 
}