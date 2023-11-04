"use client"
import {useState} from 'react';
let initialState = {
     email : "",
     password : "",
     checkout : false,
     };
export default function FormDemo(){
     const [form, setForm] = useState(initialState)
      
     function onChangeHandler (e){
          let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
          console.log(value)
          setForm({
               ...form,
               [e.target.name] : value
          })
     }

     function submitHandler(e){
          e.preventDefault();
          console.log('Form ',form);
          setForm(initialState)
     }

     return (<>
          <form className='w-25 m-auto mt-5'>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={form.email} onChange={onChangeHandler} name="email"/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={form.password} onChange={onChangeHandler} name="password"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" value={form.checkout} onChange={onChangeHandler} name="checkout"/>
    <label className="form-check-label" >Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={submitHandler}>Submit</button>
</form>
     </>)
}