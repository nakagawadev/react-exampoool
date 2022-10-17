import { createContext, useState, useEffect } from 'react'
import {tasks as data} from '../data/task'

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    const createTask = (task) => setTasks([...tasks, {
        title: task.title,
        id: tasks.length,
        descripcion: task.description
    }]);

    const deleteTask = (task_id) => setTasks(tasks.filter(task => task.id !== task_id));

    useEffect(() => {
        setTasks(data)
    }, []);

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask,
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}