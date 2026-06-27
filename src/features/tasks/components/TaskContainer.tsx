import { useTasks  } from '../hooks/useTasks';
import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';


export const TaskContainer = () => {
  const { tasks, loading, addTask, deleteTask } = useTasks();
  const [inputText, setInputText] = useState('')
  if (loading) return <div>Завантаження завдань...</div>;

  return (
    <>
      <TaskForm onAddTask={addTask} inputText={inputText} setInputText={setInputText}/>
      <TaskList tasks={tasks} loading={loading} onDeleteTask={deleteTask}/>
    </>
  );
};