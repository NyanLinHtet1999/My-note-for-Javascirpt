export  function Another(){
    return (
        <>
        This  is from another
        </>
    )
}

export default function HelloWorld(){
    return (
        <div>
            Hello World
            <Another/>
        </div>
    )
}

