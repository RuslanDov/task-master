import type { Task } from '../../../types/task';

interface TaskListProps {
  tasks: Task[];
  loading: boolean;
}

export const TaskList = ({ tasks, loading }: TaskListProps) => {
  if (loading) return <div>Завантаження завдань...</div>;

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
};