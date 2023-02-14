import styles from './TaskItems.module.css'
import { CheckCircle, PlusCircle, Trash } from "phosphor-react";

interface TaskItensProps {
    id: string,
    content: string,
    isDone: boolean
    onDoneTask: (id: string) => void;
    onDeleteTask: (id: string) => void;
}

export function TaskItems({ id, content, isDone, onDoneTask, onDeleteTask }: TaskItensProps) {

    const taskIsDone = isDone ? styles.checkedTask : styles.unCheckedTask;

    function handleIsDoneTask() {
        onDoneTask(id);
    }

    function handleDeletTask() {
        onDeleteTask(id);
    }

    return (
        <div className={styles.taskList}>
            <button
                className={taskIsDone}
                onClick={handleIsDoneTask}
            >
                <CheckCircle size={24} weight="duotone" />
            </button>

            <p className={taskIsDone}>{content}</p>

            <button
                className={styles.deleteTask}
                onClick={handleDeletTask}
            >
                <Trash size={14} weight="duotone" />
            </button>
        </div>
    )
}