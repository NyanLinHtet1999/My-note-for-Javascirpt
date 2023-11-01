
"use client"

function Button({onClick}){
    return (
        <button type="button" onClick={onClick}>Click Me</button>
    )
}

export default function CustomButton()
{
    const handler = (event) =>  {
        console.log("Button click", event);
    };
    return (
     <Button onClick={handler}/>
    )
}





