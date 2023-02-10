import styles from './Task.module.css'
import { CheckCircle, Circle, PlusCircle, Trash } from "phosphor-react";
import { TaskItens } from './TaskItens';
import { useState } from 'react';

export function Task() {
    const [tasks, setTask] = useState([
        1,
    ])

    function handleCreateNewTask() {
        event?.preventDefault()
        setTask([
            ...tasks, tasks.length +1
        ])

    }

    return (
        <main className={styles.wrapper}>

            <div className={styles.taskContent}>
                <form onSubmit={handleCreateNewTask} className={styles.formTask}>
                    <input
                        type="text"
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
                        <span>3</span>
                    </div>
                    <div className={styles.tasksCompleted}>
                        <strong>Concluídas</strong>
                        <span>1 de 3</span>
                    </div>
                </header>
            </div>

            <section className={styles.taskItens}>
                {tasks.map(tasksitens => {
                    return <TaskItens />
                })}


            </section>

        </main>
    )
}