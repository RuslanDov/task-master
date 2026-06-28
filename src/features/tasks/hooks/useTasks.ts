import { useState, useEffect } from 'react';
import type { Task } from '../types/task';
import { fetchTasks } from '../services/taskService';


export const useTasks = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        const load = async () => {
            const saved = localStorage.getItem("tasks");
            if (saved) {
                setTasks(JSON.parse(saved));
            } else {
                const data = await fetchTasks();
                setTasks(data);
            }
            setIsLoaded(true);
            setLoading(false);
        };
        load();
    }, []);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }, [tasks, isLoaded]);

    function addTask(title: string) {
        const newTask: Task = {
        id: Date.now().toString(),
        title: title,
        isCompleted: false
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    }

    function toggleTask(id: string) {
        setTasks((prevTask) => prevTask.map((task) => {
            if (task.id === id) {return {...task, isCompleted: !task.isCompleted}}
            return task
        }))
    }

    function deleteTask(id: string) {
        setTasks((prevTask) => prevTask.filter((task) => task.id !== id))
    }

    return { tasks, loading, addTask, deleteTask, toggleTask };
};