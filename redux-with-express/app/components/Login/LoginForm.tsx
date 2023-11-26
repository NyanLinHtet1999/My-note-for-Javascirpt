"use client"
import { useDispatch } from "react-redux";
import * as Yup from 'yup';
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field } from 'formik';
import Button from "react-bootstrap/Button";

export default function LoginForm() {
     //   let dispatch = useDispatch();
      
        const userSchema = Yup.object().shape({
             name: Yup.string()
               .min(2, 'Too Short!')
               .max(50, 'Too Long!')
               .required('Required'),
             password: Yup.string()
               .required('Required'),
             
           });
     return (
          <Formik
          initialValues={{
            name:  "",
            password:  "",
          }}
          validationSchema={userSchema}
          onSubmit={async (values) => {
           //  await new Promise((r) => setTimeout(r, 500));
           //  console.log(values);
           
           //  let movie:Movie = {
           //    title : values.title,
           //    year : values.year,
           //    director : director
           //  }
           //  dispatch(saveMovieAsync(movie)).unwrap()
           //  .then(result => props.handleClose());
            }
           }
        >
             {({ errors, touched }) => (
          <Form>
            <label htmlFor="name" className="form-label">Name</label>
            <Field id="name" name="name" placeholder="Enter Name" className="form-control"/>
            {errors.name && touched.name ? (
                 <div className=" text-danger">{errors.name}</div>
               ) : null}
    
            <label htmlFor="password" className="form-label">Password</label>
            <Field id="password" name="password" type ="password" placeholder="Enter Password" className="form-control"/>
            {errors.password && touched.password ? (
                 <div className=" text-danger">{errors.password}</div>
               ) : null}
            
            <button type="submit" className="btn btn-sm btn-primary mt-2">
                Submit
            </button>
          </Form>
             )}
        </Formik>
     );
    
   }