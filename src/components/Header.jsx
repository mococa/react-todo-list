import React from 'react'

function Header({fn}) {
    return (
        <div className="header">
            <h1>Todo List</h1>
            
            <button className="clickable" onClick={fn}>
                Create Task
            </button>
        </div>
    )
}

export default Header
