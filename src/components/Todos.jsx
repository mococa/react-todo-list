import React from 'react'
import Card from './Card';

function Todos({todos, fn}) {
    return (
        <main>
            <h3 style={{fontWeight:300}}>All Tasks</h3>
            <section className="card-container">
                {todos.map((x,index)=> <Card key={index} data={x} fn={fn} index={index}/>  )}
            </section>
            
        </main>
    )
}

export default Todos
