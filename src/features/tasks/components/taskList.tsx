import { useTasks  } from '../hooks/useTasks';
import TaskForm from './TaskForm';


export const TaskList = () => {
  const { tasks, loading, addTask } = useTasks();
  if (loading) return <div>Завантаження завдань...</div>;

  return (
    <>
      <TaskForm onAdd={addTask}/>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </>
  );
};