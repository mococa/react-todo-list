import React from 'react'
import {FaGithub} from 'react-icons/fa'
import { ThemeContext } from '../providers/theme'

function Footer() {
    const {getTheme} = React.useContext(ThemeContext)
    const theme = getTheme().footer
    return (
        <footer style={{backgroundColor:theme.background, color:theme.color}}>
           <a href="https://github.com/mococa" target="_blank" rel="noreferrer">
                <h3><FaGithub style={{width:'50px', height:'100%'}}/> Made by Luiz Felipe Moureau</h3> 
            </a>
        </footer>
    )
}

export default Footer
