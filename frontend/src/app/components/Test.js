'use client'
import { useState } from 'react';

export default function Test({headers, children}){
  const [activeTab, setActiveTab] = useState(0)
  return(<>
  <div>
    {headers.map((header, index) => <span 
    key ={index} onClick={() => setActiveTab(index)}
    >
      {header} 
       </span>)}
  </div>
  <div>
    {children[activeTab]}
  </div>
  </>)
}