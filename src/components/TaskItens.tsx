import styles from './TaskItens.module.css'
import { CheckCircle, Circle, PlusCircle, Trash } from "phosphor-react";

export function TaskItens() {
    return (
        <section className={styles.taskList}>
                <ul>
                    <li>
                        <button
                            className={styles.checkTask}>
                            <Circle size={24} weight="duotone" />
                        </button>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <button
                            className={styles.deleteTask}>
                            <Trash size={14} weight="duotone" />
                        </button>

                    </li>
                    <li>
                        <button
                            className={styles.checkedTask}>
                            <CheckCircle size={24} weight="duotone" />
                        </button>
                        <p
                            className={styles.taskCompleted}
                        >
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                        <button
                            className={styles.deleteTask}>
                            <Trash size={14} weight="duotone" />
                        </button>
                    </li>
                </ul>
            </section>
    )
}