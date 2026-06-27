import type { Task } from "../types/task"

interface PropsTasksType {
    tasks: Task[]
    loading: boolean
}


function TaskList({tasks, loading}: PropsTasksType) {
if (loading) return <div>Завантаження завдань...</div>;
return (
    <>
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>{task.title}</li>
            ))}
        </ul>
    </>
)
}

export default TaskList