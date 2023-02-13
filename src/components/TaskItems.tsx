import styles from './TaskItems.module.css'
import { CheckCircle, Circle, PlusCircle, Trash } from "phosphor-react";

interface TaskItensProps {
    id: string,
    content: string,
    isDone: boolean
}

export function TaskItems({ id, content, isDone }: TaskItensProps) {

    return (
        <div className={styles.taskList}>
            <button
                className={styles.checkedTask}>
                <Circle size={24} weight="duotone" />
            </button>
            <p>{content}</p>
            <button
                className={styles.deleteTask}>
                <Trash size={14} weight="duotone" />
            </button>
        </div>
    )
}