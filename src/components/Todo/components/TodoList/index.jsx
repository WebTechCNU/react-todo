/**
 * external libs
 */
import React, {useState} from "react";
/**
 * components
 */
import TodoItem from '../TodoItem'
/**
 * styles
 */
import styles from './index.module.scss'
/**
 * model
 */
import useTodosModel from "../../../../hooks/model/todos.model";

export default function TodoList({todos, deleteTodo}){
    return (
        <div className={styles.todoList}>
            {todos.map( todo => (
                <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo}/>
            ))}
        </div>
    )
}
