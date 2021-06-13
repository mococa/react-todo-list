import React from 'react'

function Header({fn}) {
    return (
        <header className="header">
            <h1>Todo List</h1>
            
            <button className="clickable" onClick={fn}>
                Create Task
            </button>
        </header>
    )
}

export default Header
