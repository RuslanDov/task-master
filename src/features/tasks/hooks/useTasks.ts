import { useState, useEffect } from 'react';
import type { Task } from '../types/task';
import { fetchTasks } from '../services/taskService';


export const useTasks = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        const loadTasks = async () => {
            setLoading(true);
            const data = await fetchTasks();
            setTasks(data);
            setLoading(false);
        };

        loadTasks();
    }, []);

    function addTask(title: string) {
        const newTask: Task = {
        id: Date.now().toString(),
        title: title,
        isCompleted: false
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    }

    function deleteTask(id: string) {
        setTasks((prevTask) => prevTask.filter((task) => task.id !== id))
    }

    return { tasks, loading, addTask, deleteTask };
};