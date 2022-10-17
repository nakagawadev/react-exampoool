import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
import TaskCard from './TaskCard'

function TaskList() {

    const { tasks } = useContext(TaskContext);

    if (tasks.length === 0)
        return <h3 className='text-white text-4xl text-center mt-10'>No hay tareas mamawebo</h3>
    return (
        <div className='grid grid-cols-4 gap-2'>{
            tasks.map(task => (<TaskCard key={task.id} task={task}></TaskCard>))
        }</div>
    )
}

export default TaskList;