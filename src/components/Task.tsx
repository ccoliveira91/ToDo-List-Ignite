import styles from './Task.module.css'
import { CheckCircle, Circle, PlusCircle, Trash } from "phosphor-react";
import { TaskItems } from './TaskItems';
import { ChangeEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export type TaskType = {
    id: string,
    content: string,
    isDone: boolean
}

export function Task() {
    const [inputTask, setInputTask] = useState('')
    const [tasks, setTask] = useState<TaskType[]>([])
    const taskQuantity = tasks.length

    function handleCreateNewTask(event: any) {
        event?.preventDefault()

        const newTask: TaskType = {
            id: uuidv4(),
            content: inputTask,
            isDone: false
        }

        setTask([
            ...tasks, newTask
        ])
        setInputTask('')
    }

    function onChangeInputTask(event: ChangeEvent<HTMLInputElement>) {
        setInputTask(event.target.value)
    }

    function handleIsDoneTask(id: string) {
        const newTasks = tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    isDone: !task.isDone,
                };
            }
            return task;
        });
        setTask(newTasks);
    }

    function handleDeleteTask(id: string) {
        const newTasks = tasks.filter(task => task.id !== id);
        setTask(newTasks);
    }

    function numberOfDoneTask(): number {
        const count = tasks.filter(task => task.isDone === true).length;
        return count;
    }

    const isEmptyTasks = taskQuantity === 0;

    return (
        <main className={styles.wrapper}>

            <div className={styles.taskContent}>
                <form onSubmit={handleCreateNewTask} className={styles.formTask}>
                    <input
                        type="text"
                        value={inputTask}
                        onChange={onChangeInputTask}
                        placeholder="Adicione uma nova tarefa"
                    />
                    <button
                        type="submit">Criar
                        <PlusCircle size={20} />
                    </button>
                </form>
                <header className={styles.header}>
                    <div className={styles.tasksCreated}>
                        <strong>Tarefas criadas</strong>
                        <span>{taskQuantity}</span>
                    </div>
                    <div className={styles.tasksCompleted}>
                        <strong>Concluídas</strong>
                        {isEmptyTasks ? (<span>{numberOfDoneTask()}</span>) : (<span>{numberOfDoneTask()} de {taskQuantity}</span>)}
                    </div>
                </header>
            </div>

            {
                tasks.length <= 0 && (
                    <section className={styles.taskEmpty}>
                        <header>
                            {/* <Clipboard size={50} /> */}
                            <p>Você ainda não tem tarefas cadastradas</p>
                            <span>Crie tarefas e organize seus itens a fazer</span>
                        </header>
                    </section>
                )
            }
            
            <section className={styles.taskItems}>
                {tasks.map(task => {
                    return <TaskItems
                        key={task.id}
                        id={task.id}
                        content={task.content}
                        isDone={task.isDone}
                        onDoneTask={handleIsDoneTask}
                        onDeleteTask={handleDeleteTask}
                    />
                })}

            </section>

        </main>
    )
}