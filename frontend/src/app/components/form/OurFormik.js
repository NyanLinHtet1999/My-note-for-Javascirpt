"use client";
import {useState} from "react";
import InputField from "./InputField";

function Child({child,value,onChange})
{
   if(child.type && child.type.name==='InputField')
   {
       return (<InputField {...child.props}
                           onChange={onChange}
                           value={value}
       />);
   }
   else
    {
        return (<>
            {child}
            </>);
    }
}
export default function OurFormik({initialValues,children,onSubmit})
{
    const [values,setValues] = useState(initialValues);
    const onChangeHandler = (event)=>{
        let value = event.target.value;
        
        setValues({
            ...values,
            [event.target.name]: value
        });
    }
    const submitHandler = (event)=>{
        event.preventDefault();
        onSubmit(values);
    };
    console.log(children);
    return (<div>
        <form onSubmit={submitHandler}>
        {
           children.map((child,index)=>{
               return  <Child key={index}
                              value={values[child.props.name]}
                              child={child}
                              onChange={onChangeHandler}/>
           })
        }
        </form>
    </div>);
}

