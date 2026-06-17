import { useTasks } from './features/tasks/hooks/useTasks';
import { TaskList } from './features/tasks/components/taskList'

function App() {
  const { tasks, loading } = useTasks();


  return (
    <>
    <TaskList tasks={tasks} loading={loading}/>
    </>
  );
}

export default App
