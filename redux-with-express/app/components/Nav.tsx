'use client'

/* Core */
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/* Instruments */
import styles from '../styles/layout.module.css'

export const Nav = () => {
  const pathname = usePathname()

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" href="/">
                Home 
            </Link>
          </li>
        </ul>
      </div>
    
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
            <Link className="nav-link"  href="/verify">
                Verify
            </Link>
          </li>
        </ul>
      </div>
      
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link"  href="/movie">
                Movie List
            </Link>
          </li>
        </ul>
      </div>
    </nav>


  )
}
