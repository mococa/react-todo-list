import React, {useState} from 'react'
import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
    const [showModal, setShowModal] = useState(false)
    const [todos,setTodos] = useState([])

    function deleteTask(i){
        setTodos(todos.filter((x,index)=>index!==i))
    }
    return (
        <>
            <Header fn={()=>setShowModal(true)}/>
            {showModal && <Modal todos={todos} fn={{setTodos, setShowModal}}/>}
            {todos.length ? 
                <Todos todos={todos} fn={{deleteTask}}/>
            :
                <main><p>Oops! It seems empty here... Try adding a new task.</p></main>
            }
            
            <Footer/>
        </>
    )
}

export default App
