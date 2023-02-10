/**
 * external libs
 */
import React, {useRef, useState} from "react";
/**
 * styles
 */
import styles from './index.module.scss'
/**
 * model
 */
import useTodoModel from "../../../../hooks/model/todo.model";
/**
 * assets
 */
import CheckIcon from "../../../../assets/check.svg";
import EditIcon from "../../../../assets/edit.svg";
import TrashIcon from "../../../../assets/trash.svg";


export default function TodoItem({todo: initialTodo, deleteTodo}) {
    const {todo, editText, editComplete, editEditable} = useTodoModel(initialTodo)
    const inputRef = useRef(null);
    const [newText, setNewText] = useState(todo.text)

    const setEditable = () => {
        editEditable()
        setTimeout(() => {
            inputRef.current.focus()
            inputRef.current.selectionStart =  inputRef.current.value.length
            inputRef.current.style.height = (inputRef.current.scrollHeight) + "px";
            inputRef.current.style.maxHeight = (inputRef.current.scrollHeight) + "px";
        }, 0)
    }

    const onChangeInput = (e) => {
        console.log(1)
        inputRef.current.style.height = (inputRef.current.scrollHeight) + "px";
        inputRef.current.style.maxHeight = (inputRef.current.scrollHeight) + "px";
        setNewText(e.target.value.trim())
    }

    return (
        <div className={`${styles.todo} ${todo.complete && styles.competed}`}>
            <div className={styles.todo__left}>
                <div className={styles.todo__checkbox} onClick={editComplete}>
                    <div className={styles.todo__checkbox_active}/>
                </div>
                {todo.editable ? (
                    <textarea className={styles.todo__input}
                           ref={inputRef}
                           value={newText}
                           onChange={onChangeInput}/>
                ) : (
                    <div className={styles.todo__text}>
                        {todo.text}
                    </div>
                )}
            </div>
            <div className={styles.todo__right}>
                {todo.editable ? (
                    <div className={styles.todo__icon} onClick={() => editText(newText)}>
                        <img src={CheckIcon} alt="save"/>
                    </div>
                ) : (
                    <div className={styles.todo__icon}>
                        <img src={EditIcon} alt="edit" onClick={setEditable}/>
                    </div>
                )}
                <div className={styles.todo__icon} onClick={() => deleteTodo(todo.id)}>
                    <img src={TrashIcon} alt="delete"/>
                </div>
            </div>
        </div>
    )
}
