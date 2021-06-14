import React, { useState, useCallback, useEffect } from 'react'
import { ThemeContext } from '../providers/theme';
import { TodoContext } from '../providers/todos';
import Card from './Card';
import Modal from './Modal';


function Todos() {
    const {todos, todoIndex, setTodoIndex} = React.useContext(TodoContext)
    const [showModal, setShowModal] = useState(false);
    const {getTheme} = React.useContext(ThemeContext)
    const theme = getTheme().body
    useEffect(() => {
        if(todoIndex < 0) return          
        setShowModal(true)
    }, [todoIndex])

    document.body.style.backgroundColor = theme.background;
    document.body.style.color = theme.color;

      


    return (
        <main>
            
            {todos.length ?
                <>
                    <h3 style={{fontWeight:300,color:theme.p}}>All Tasks</h3>
                    <section className="card-container">
                        {todos.map((x,index)=> <Card key={index} data={x} index={index} />)}
                    </section>
                    
                </>
                
                :
                <p style={{color:theme.p}}>Oops! It seems empty here... Try adding a new task.</p>
            }
            { showModal && <Modal close={()=>{setTodoIndex(-1);setShowModal(false)}} index={todoIndex}/> }
            
        </main>

    )
}

export default Todos
