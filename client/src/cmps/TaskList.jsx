import { TaskPreview } from "./TaskPreview"

export const TaskList = ({ tasks }) => {
  
  return (
    <ul className="task-list clean-list">
      {tasks.map((task) => {
        return <TaskPreview key={task._id} task={task} />
      })}
    </ul>
  )
}