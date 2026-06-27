export interface Task {
    id: string;
    title: string;
    isCompleted: boolean;
}

export type CreateTaskDTO = Omit<Task, 'id' | 'isCompleted'>;