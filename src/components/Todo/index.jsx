/**
 * external libs
 */
import React, {useEffect, useState} from 'react'
/**
 * components
 */
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
/**
 * styles
 */
import styles from './index.module.scss'
/**
 * model
 */
import useTodosModel from "../../hooks/model/todos.model";


export default function Todo(){
    const {todos, getTodo, deleteTodo, addTodo} = useTodosModel()


    useEffect(() => {
        getTodo()
    }, [])

    if(!todos){
        return null
    }

    return (
        <div className={styles.todoWrapper}>
            <AddTodo addTodo={addTodo}/>
            <TodoList todos={todos} deleteTodo={deleteTodo}/>
        </div>
    )
}
