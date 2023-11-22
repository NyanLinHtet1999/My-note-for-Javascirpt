export default function CommentId ({params} :
      { 
          params :{ blogId : string, commentId: string}
     }) {
     return (<div>
          Comment Id {params.blogId} {params.commentId}
     </div>)
}