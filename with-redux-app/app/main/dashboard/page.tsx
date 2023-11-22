"use client"

import { useRouter } from "next/navigation";

// import { Metadata } from "next";
export default function MainPage() {
     const router = useRouter();
     const btnHandler = () => {
          console.log(router);
          router.push("/")
     }
     return (<>
          dashboard Page
          <button 
                    type={"button"}
                    className={"btn btn-primary"}
                    onClick={btnHandler}>
                         Go to home
          </button>
     </>)
}

// export const Metadata = {
//      title: 'Dashboard   ',
//    }