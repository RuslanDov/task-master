import type { Task } from "../types/task"

interface PropsTasksType {
    tasks: Task[]
    loading: boolean
    onDeleteTask: (id: string) => void
    onToggleTask: (id: string) => void
}


function TaskList({tasks, loading, onDeleteTask, onToggleTask}: PropsTasksType) {
    if (loading) return <div>Завантаження завдань...</div>;
    return (
        <>
            <ul>
                {tasks.map((task) => {        
                    return(
                        <li key={task.id} style={{ display: 'flex', alignItems: 'center' }}>
                            <input type="checkbox" onChange={() => onToggleTask(task.id)} checked={task.isCompleted} />
                            <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
                                {task.title}
                            </span>
                            
                            <button onClick={() => onDeleteTask(task.id)}>Видалити</button>
                        </li>
                    )
                })}
            </ul>
        </>
)
}

export default TaskList