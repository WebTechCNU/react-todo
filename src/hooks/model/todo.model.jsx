import React, {useState, useCallback, useEffect} from "react";

export default function useTodoModel(initialTodo){
    const [todo, setTodo] = useState(initialTodo || null)

    const editComplete = useCallback(() => {
        setTodo(todo => ({
            ...todo,
            complete: !todo.complete
        }))
    }, [])

    const editText = useCallback((text) => {
        setTodo(todo => ({
            ...todo,
            editable: !todo.editable,
            text,
        }))
    }, [])

    const editEditable = useCallback(() => {
        setTodo(todo => ({
            ...todo,
            editable: !todo.editable
        }))
    }, [])

    return {
        todo,
        editText,
        editComplete,
        editEditable,
    }
}
