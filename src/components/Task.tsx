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
        tasks.map(task=>{
            if (task.id === id){
                task.isDone = !task.isDone;
            }
        })
    }

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
                        <span>1 de 3</span>
                    </div>
                </header>
            </div>

            <section className={styles.taskItems}>
                {tasks.map(task => {
                    return <TaskItems
                        key={task.id}
                        id={task.id}
                        content={task.content}
                        isDone={task.isDone}
                        onDoneTask={handleIsDoneTask}
                    />
                })}

            </section>

        </main>
    )
}