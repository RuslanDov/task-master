import type { Task } from '../../../types/task';

export const fetchTasks = async (): Promise<Task[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    return [
        { id: '1', title: 'TypeScript', isCompleted: false },
        { id: '2', title: 'Git', isCompleted: true },
    ];
};