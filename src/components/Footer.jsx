import React from 'react'
import {FaGithub} from 'react-icons/fa'

function Footer() {
    return (
        <footer>
           <a href="https://github.com/mococa" target="_blank" rel="noreferrer">
                <h3><FaGithub style={{width:'50px', height:'100%'}}/> Made by Luiz Felipe Moureau</h3> 
            </a>
        </footer>
    )
}

export default Footer
