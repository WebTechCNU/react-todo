/**
 * external libs
 */
import React, {useRef, useState} from 'react'
/**
 * external libs
 */
import styles from './index.module.scss'

export default function AddTodo({ addTodo }){
    const inputRef = useRef(null)

    const addText = () => {
        addTodo(inputRef.current.value)

        inputRef.current.value = "";
        inputRef.current.blur();
    }

    const keyUp = (e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            addText()
        }
    }

    return (
        <div className={styles.addTodo}>
            <input type="text" onKeyUp={keyUp} ref={inputRef} className={styles.addTodo__input}/>
            <button className={styles.addTodo__btn} onClick={addText}>Add todo</button>
        </div>
    )
}
