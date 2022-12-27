import { useState } from "react";
import { useEffect } from "react";
import { TaskList } from "../cmps/TaskList";
import axios from 'axios'

const demoTasks = [
    {
        _id: "123",
        title: "taks1",
        createdAt: "24124241234",
        details: "lorem ipsum lorem ipsum",
        isDone: false,
        finishUntil: "",
        subTasks: [],
      },
      {
        _id: "1234",
        title: "taks2",
        createdAt: "12312343432",
        details: "lorem ipsum lorem ipsum",
        isDone: false,
        finishUntil: "",
        subTasks: []
    }
]

export function HomePage() {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const loadTasks = async () => {
      setTasks(demoTasks)
      // const loadedTasks = await axios.get('')
      // if (!loadedTasks) setTasks(demoTasks)
      // else setTasks(loadedTasks)
    }

    loadTasks()
  }, [])
  return (
    <section className='home-page'>
      <h1>Google Task</h1>
      <TaskList tasks={tasks} />
    </section>
  )
}