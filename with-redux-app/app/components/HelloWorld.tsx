export default function HelloWorld(prop : {message: string }) {
     let data = "How are you?";
     
     return (<>
          Hello World
          {
               data.toLowerCase() 

          }
          <br/>
          {
           prop.message
          }
     </>)
}