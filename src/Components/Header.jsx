import React from 'react'
import "../assets/scss/app.scss"
export default function Header(){
    return(
        <nav>
            <div className="nav__content">
               <ul>
                   <li>About</li>
                   <li>Gallery</li>
                   <li>Contact</li>
                   <li>Support Us</li>
               </ul>
            </div>
        </nav>
    )
}