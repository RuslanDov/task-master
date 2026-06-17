import { useTasks } from './features/tasks/hooks/useTasks';

function App() {
  const { tasks, loading } = useTasks();

  if (loading) return <div>Завантаження...</div>;

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}

export default App
