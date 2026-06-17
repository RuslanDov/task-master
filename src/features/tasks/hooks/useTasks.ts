import { useState, useEffect } from 'react';
import type { Task } from '../../../types/task';
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

    return { tasks, loading };
};