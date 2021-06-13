import React from 'react'
import {/*MdEdit,*/ MdDelete} from 'react-icons/md';
function Card({data, fn, index}) {
    return (
        <div className="card" style={{borderTop: `4px solid ${data.color}`}}>

            <span className="topic" style={{backgroundColor:data.color}}>
                {data.topic}
            </span>

            <span style={{height:"100%", margin:"0 5px"}}>
                {data.description}
            </span>

            <footer>
                {/* {<MdEdit className="clickable" size={24} fill={data.color}  />} */}
                <MdDelete className="clickable" size={24} fill={data.color} strokeWidth={0.15} onClick={()=>fn.deleteTask(index)} />
            </footer>
        </div>
    )
}

export default Card
