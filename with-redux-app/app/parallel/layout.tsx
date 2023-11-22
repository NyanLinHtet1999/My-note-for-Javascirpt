import { Providers } from '@/lib/providers'
import styles from '../styles/layout.module.css'
import React from 'react'

export default function ParallelLayout(props: {
     children: React.ReactNode
     analytic: React.ReactNode
     team: React.ReactNode
   }) {
     return ( <>
          {props.children}
          {props.team}
          {props.analytic}
        </>)
}