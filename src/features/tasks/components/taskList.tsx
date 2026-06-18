import type { Task } from '../../../types/task'
import { useTasks  } from '../hooks/useTasks';

interface TaskList {
  tasks: Task[];
  loading: boolean;
}


export const TaskList = () => {
    const { tasks, loading } = useTasks();
    if (loading) return <div>Завантаження завдань...</div>;

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
};