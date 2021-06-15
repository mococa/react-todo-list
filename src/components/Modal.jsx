import React, { useState, useRef } from "react";
import { MdClose } from "react-icons/md";
import { TodoContext } from "../providers/todos";
import useKey from '../hooks/onKey';

function Modal({close, index }) {

  
  const {addTodo, editTodo, todos, setTodoIndex} = React.useContext(TodoContext)
  const textRef = useRef();
  const availableColors = [
    "#ff5555",
    "#ffc155",
    "#ffff2a",
    "#5e55ff",
    "#55ff6f",
    "#ff55cf",
    "#3d3d3d"
  ];
  const colorStyle = (color, i) => {
    return {
      width: "20px",
      height: "20px",
      backgroundColor: color,
      borderRadius: "5px",
      cursor: "pointer",
      border: i === selectedColor ? "3px solid #1d1d1d" : "none",
    };
  };
  const colIndex = () =>{
    if([-1,undefined].includes(index)){
      return 0
    }else{
      return availableColors.indexOf(todos[index].color)
    }
  }
  const [selectedColor, setSelectedColor] = useState(colIndex());
 
  const [myTodo, setMyTodo] = useState({
    topic: [-1,undefined].includes(index)?"":todos[index].topic,
    description: [-1,undefined].includes(index)?"":todos[index].description,
    color: availableColors[selectedColor]
  })
  const modalAddEdit = () =>{
    if([-1,undefined].includes(index)){
      addTodo(myTodo)
    }else{
      editTodo(myTodo, index)
    }
    close()
  }
  function setColor(i){
    if(i !== undefined){
      setSelectedColor(i)
      setMyTodo({...myTodo, color:availableColors[i]})
    }
      
    }
    useKey('Escape', ()=>{
      close()
    })
    
    useKey('Enter', ()=>{
      if(document.activeElement === textRef.current) textRef.current.value += "  - "
    }) 

  return (
    <div className="modal">
      <div className="top">
        <span>{[-1,undefined].includes(index)?"New Task":"Edit Task"}</span>
        <MdClose size={16} className="clickable" onClick={close}/>
      </div>
      <div className="body">
      <label>
        Topic:
      </label>
      <input type="text" defaultValue={[-1,undefined].includes(index)?"":myTodo.topic} onChange={e=>setMyTodo({...myTodo, topic:e.target.value})}/>
      <label>
        Description:
      </label>
      <textarea rows="5" ref={textRef} onFocus={()=>{if([-1,undefined].includes(index) && textRef.current.value === "") textRef.current.value = "  - " } } defaultValue={[-1,undefined].includes(index)?"":myTodo.description} onChange={e=>setMyTodo({...myTodo, description:e.target.value})}></textarea>
      <label>
        Color:
        <div style={{ display: "flex", gap: "5px" }}>
          {availableColors.map((color, i) => (
            <div
              onClick={() => setColor(i) }
              key={i}
              style={colorStyle(color, i)}
            ></div>
          ))}
        </div>
      </label>
      <button className="clickable" onClick={modalAddEdit}>{[-1,undefined].includes(index)?"Add Todo":"Edit Todo"}</button>
      </div>
    </div>
  );
}

export default Modal;
