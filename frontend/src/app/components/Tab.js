"use client";
import './Tab.css'
import {Children, useState} from "react";




export default function Tab({headers,children }){
    const [activeTab, setActiveTab] = useState(0);
    return (<>
        <div>
            {headers.map((header, index) => <span key={index} className="tab-header" onClick={() => setActiveTab(index)}>{header}</span>)}
        </div>
        <div>
            {children [activeTab]}
        </div>
    </>)
}