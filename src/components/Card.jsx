import React, { useState, useEffect } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { ThemeContext } from "../providers/theme";
import { TodoContext } from "../providers/todos";
function Card({ data, index }) {
  const { removeTodo, setTodoIndex } = React.useContext(TodoContext);
  const {getTheme} = React.useContext(ThemeContext)
  const theme = getTheme().card
  return (
    <>
      <div className="card" style={{ borderTop: `4px solid ${data.color}` , backgroundColor:theme.background, color:theme.color}}>
        <span className="topic" style={{ backgroundColor: data.color, color:theme.topic }}>
          {data.topic}
        </span>

        <span style={{ height: "100%", margin: "0 5px" }}>
          {data.description}
        </span>

        <footer>
          <MdEdit
            className="clickable"
            size={24}
            fill={data.color}
            strokeWidth={0.15}
            onClick={()=>{setTodoIndex(index);}}
          />
          <MdDelete
            className="clickable"
            size={24}
            fill={data.color}
            strokeWidth={0.15}
            onClick={()=>removeTodo(index)}
          />
        </footer>
      </div>
    </>
  );
}

export default Card;
