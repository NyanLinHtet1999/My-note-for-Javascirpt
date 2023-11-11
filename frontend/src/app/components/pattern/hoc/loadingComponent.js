"use client";
import {useEffect, useState} from "react";

export default function loadingComponent(InputComponent)
{
    return function NewComponent(props)
    {
        return (<div>
            {
                props.loading ? <div> Loading....</div>
                        : <InputComponent {...props}
                                          />
            }
        </div>);
    }
}