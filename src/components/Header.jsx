import React, {useState} from 'react'
import { TodoContext } from '../providers/todos';
import Modal from './Modal';
import {ImContrast} from 'react-icons/im'
import { ThemeContext } from '../providers/theme';

function Header() {
    const [showModal, setShowModal] = useState(false)
    const {setTodoIndex} = React.useContext(TodoContext)
    const {invertTheme, saveTheme,getTheme} = React.useContext(ThemeContext)
    saveTheme();
    const theme = getTheme().header;
    console.log(theme)
    const handleClick = () =>{
        setTodoIndex(-1)
        setShowModal(true)
    }
    const themeBtnStyle = {display:'flex',alignItems:'center', gap:'8px', cursor:'pointer'}

    return (
        <>
            <header className="header" style={{backgroundColor:theme.background, color:theme.color}}>
                <h1>Todo List</h1>

                <button className="clickable" onClick={handleClick}>
                    Create Task
                </button>
                <h5 style={themeBtnStyle} onClick={invertTheme}><ImContrast/>Change theme</h5>
            </header>
            {showModal  && <Modal close={()=>setShowModal(false)}/>}
        </>
    )
}

export default Header
