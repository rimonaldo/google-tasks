import { useState } from "react"


export const TaskPreview = ({ task }) => {
  const [actionsOpen, setActionsOpen] = useState(false)  

  return (
    <li className="task-preview">
      <div className="task_is-done"></div>
      <h3>{task.title }</h3>
      <div className="task_actions">
        <button onClick={() => { setActionsOpen(!actionsOpen) }}>open menu</button>
        {actionsOpen && (
          <div>
            
          </div>
        ) }
      </div>
    </li>
  )
}