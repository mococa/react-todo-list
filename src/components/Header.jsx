import React, {useState} from 'react'
import { TodoContext } from '../providers/todos';
import Modal from './Modal';

function Header() {
    const [showModal, setShowModal] = useState(false)
    const {setTodoIndex} = React.useContext(TodoContext)
    const handleClick = () =>{
        setTodoIndex(-1)
        setShowModal(true)
    }
    return (
        <>
            <header className="header">
                <h1>Todo List</h1>

                <button className="clickable" onClick={handleClick}>
                    Create Task
                </button>
            </header>
            {showModal  && <Modal close={()=>setShowModal(false)}/>}
        </>
    )
}

export default Header
