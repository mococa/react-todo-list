import React, { useState, useCallback, useEffect } from 'react'
import { TodoContext } from '../providers/todos';
import Card from './Card';
import Modal from './Modal';


function Todos() {
    const {todos, todoIndex, setTodoIndex} = React.useContext(TodoContext)
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if(todoIndex < 0) return          
        setShowModal(true)
    }, [todoIndex])

    
      


    return (
        <main>
            
            {todos.length ?
                <>
                    <h3 style={{fontWeight:300}}>All Tasks</h3>
                    <section className="card-container">
                        {todos.map((x,index)=> <Card key={index} data={x} index={index} />)}
                    </section>
                    
                </>
                
                :
                <p>Oops! It seems empty here... Try adding a new task.</p>
            }
            { showModal && <Modal close={()=>{setTodoIndex(-1);setShowModal(false)}} index={todoIndex}/> }
            
        </main>

    )
}

export default Todos
