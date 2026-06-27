import type { Task } from "../types/task"

interface PropsTasksType {
    tasks: Task[]
    loading: boolean
    onDeleteTask: (id: string) => void
}


function TaskList({tasks, loading, onDeleteTask}: PropsTasksType) {
    if (loading) return <div>Завантаження завдань...</div>;
    return (
        <>
            <ul>
                {tasks.map((task) => {        
                    return(
                    <li key={task.id}>{task.title}
                        <button onClick={() => onDeleteTask(task.id)}>Видалити</button>
                    </li>)
                })}
            </ul>
        </>
)
}

export default TaskList