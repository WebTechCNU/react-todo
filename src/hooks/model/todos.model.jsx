import React, {useState, useCallback} from "react";
import TodoResource from "../../resource/todo.resource";

const initialTodo = [
    {
        id: 1,
        text: "Підготувати презентацію по react",
        complete: true
    },
    {
        id: 2,
        text: "Розповісти про react однокурсникам",
        complete: false
    },
]

const generateId = (min = 1, max = 10000) => {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}


export default function useTodosModel(){
    const [todos, setTodos] = useState([])

    const getTodo = useCallback(() => {
        setTodos(initialTodo.map( todo => new TodoResource(todo)))
    }, [])

    const deleteTodo = useCallback((todoId) => {
        setTodos(todos => todos.filter(({id}) => id !== todoId))
    }, [])

    const addTodo = useCallback((text) => {
        setTodos(todos => [...todos, new TodoResource({
            id: generateId(),
            complete: false,
            text,
        })]);
    }, [])


    return {
        todos,
        getTodo,
        deleteTodo,
        addTodo,
    }
}
