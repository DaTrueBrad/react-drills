import React, {useState} from 'react'

function NewTask(props) {
  const [input, setInput] = useState('')
  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)}/>
      <button onClick={() => props.addTask(input)}>Add Task</button>
    </div>
  )
}

export default NewTask