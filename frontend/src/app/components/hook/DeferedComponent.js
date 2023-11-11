"use client";
import {useState, Suspense, useMemo, useDeferredValue} from "react";

// function getComputedValue(name)
// {
//     return [
//         "One",
//         "Two",
//         "Three"
//     ];
// }
// export default function DeferedComponent()
// {
//     const [name, setName] = useState('');
//     const deferredName = useDeferredValue(name);

//     const LIST_SIZE= 10000;

//     const list = useMemo(() => {
//         const dataList = [];
//         for (let i = 0; i < LIST_SIZE; i++) {
//             dataList.push(deferredName);
//         }
//         return dataList;
//     }, [deferredName]);
//     console.log(list);

//     const handleChange = (e) => {
//         setName(e.target.value);
//     };

//     return (
//         <div>
//             <input type='text' value={name} onChange={handleChange} />
//             <div>
//                 {list.map((item,index) => {
//                     return <div key={index}>
//                         {item}
//                     </div>;
//                 })}
//             </div>
//         </div>
//     );
// }

export default function DeferedComponent(){
    const [value, setValue] = useState("");
    const deferredName = useDeferredValue(value);

    const LIST_SIZE = 10000;

    const lists = useMemo(()=> {
        let dataList = [];
        for (let i = 0; i < LIST_SIZE; i++) {
            dataList.push(value)
        };
        return dataList;
    }, [deferredName]);
    console.log(value);
    console.log(deferredName);
    console.log("---end---")

    return (<>
        <input type="text" value={value} onChange={e => setValue(e.target.value)}/><br/>
        <div>
            {lists.map((list, index) => {
               return <div key={index}>{list}</div>
            })}
        </div>
        
    </>)
}