

// export default function Profile({isAdmin}){
//    // if(isAdmin){
//    //    return(
//    //       <>
//    //          It is admin
//    //       </>
//    //    )
//    // }else {
//    //    return (<>
//    //       It is user
//    //    </>)
//    // }

//    return(<>
//       {isAdmin ? "It is Admin"  : "It is user"}
//    </>)
// }


// export default function Profile({isAdmin}){
//    if(isAdmin){
//       return (<>
//          It is admin
//       </>)
//    }else {
//       return (<>
//          It is user
//       </>)
//    }
// }

export default function Profile ({isAdmin}){
   if(isAdmin){
      return(<>
         It is Admin
      </>)
   }else {
      return(<>
         It is user
      </>)
   }
}