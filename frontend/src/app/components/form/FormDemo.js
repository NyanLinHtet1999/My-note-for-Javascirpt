"use client"
import {useState} from 'react';
// let initialState = {
//      email : "",
//      password : "",
//      checkout : false,
//      };
// export default function FormDemo(){
//      const [form, setForm] = useState(initialState)
      
//      function onChangeHandler (e){
//           let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
//           console.log(value)
//           setForm({
//                ...form,
//                [e.target.name] : value
//           })
//      }

//      function submitHandler(e){
//           e.preventDefault();
//           console.log('Form ',form);
//           setForm(initialState)
//      }

//      return (<>
//           <form className='w-25 m-auto mt-5'>
//   <div className="mb-3">
//     <label  className="form-label">Email address</label>
//     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={form.email} onChange={onChangeHandler} name="email"/>
//   </div>
//   <div className="mb-3">
//     <label  className="form-label">Password</label>
//     <input type="password" className="form-control" id="exampleInputPassword1" value={form.password} onChange={onChangeHandler} name="password"/>
//   </div>
//   <div className="mb-3 form-check">
//     <input type="checkbox" className="form-check-input" id="exampleCheck1" value={form.checkout} onChange={onChangeHandler} name="checkout"/>
//     <label className="form-check-label" >Check me out</label>
//   </div>
//   <button type="submit" className="btn btn-primary" onClick={submitHandler}>Submit</button>
// </form>
//      </>)
// }

let initialState = {
     email : "",
     password : "",
     checkbox : false
};

export default function FormDemo(){
     const [form, setForm] = useState(initialState);

     function onChangeHandler(e){
          setForm({
               ...form,
              [ e.target.name] : e.target.name === "checkbox" ? e.target.checked : e.target.value
          })
     }
     function onSubmitHandler(e){
          e.preventDefault ()
          console.log(form);
          setForm(initialState)
     }
     return (<form className='w-25 m-auto'>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input  type="email" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"
                    name ="email"
                    value ={form.email}
                    onChange={onChangeHandler}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input  type="password" 
                    className="form-control" 
                    id="exampleInputPassword1"
                    name ="password"
                    value ={form.password}
                    onChange={onChangeHandler}/>
          </div>
          <div className="mb-3 form-check">
            <input  type="checkbox" 
                    className="form-check-input" 
                    id="exampleCheck1"
                    name ="checkbox"
                    checked={form.checkbox}
                    onChange={onChangeHandler}/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={onSubmitHandler}>Submit</button>
        </form>)
}