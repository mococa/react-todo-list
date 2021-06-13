import React, { useState } from "react";
import { MdClose } from "react-icons/md";

function Modal({todos, fn ,todo, index}) {
    function modalButton(){
        if(todo === undefined){
            //Add todo
            if(!myTodo.topic) return alert("Topic field missing")
            if(!myTodo.description) return alert("Description field missing")
            fn.setTodos([...todos, myTodo])
            fn.setShowModal(false)
            

        }else{
            //Edit todo
            
            fn.editTodo(index, myTodo)
            

        }
    }
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
  
  const [selectedColor, setSelectedColor] = useState(0);
  setColor()
  const [myTodo, setMyTodo] = useState({
    topic: todo===undefined?"":todo.topic,
    description: todo===undefined?"":todo.description,
    color: availableColors[selectedColor]
  })
  function setColor(i){
    if(todo !== undefined){
      //EDITING TASK
      setSelectedColor(availableColors.findIndex(x=>todo.color))
    }
    if(i !== undefined){
      setSelectedColor(i)
      setMyTodo({...myTodo, color:availableColors[i]})
    }
  }
  return (
    <div className="modal">
      <div className="top">
        <span>{todo===undefined?"New Task":"Edit Task"}</span>
        <MdClose size={16} className="clickable" onClick={()=>fn.setShowModal(false)}/>
      </div>
      <div className="body">
      <label>
        Topic:
      </label>
      <input type="text" defaultValue={todo===undefined?"":myTodo.topic} onChange={e=>setMyTodo({...myTodo, topic:e.target.value})}/>
      <label>
        Description:
      </label>
      <textarea defaultValue={todo===undefined?"":myTodo.description} onChange={e=>setMyTodo({...myTodo, description:e.target.value})}></textarea>
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
      <button className="clickable"onClick={modalButton}>{todo===undefined?"Add Todo":"Edit Todo"}</button>
      </div>
      
    </div>
  );
}

export default Modal;
