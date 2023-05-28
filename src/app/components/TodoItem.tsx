"use client"

type TodoItemProps = {
    id: string
    title: string
    complete: boolean
    toggleTodo: (id: string, complete: boolean) => void
}

export default function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps)
{
    return <li>
        <input id={id} defaultChecked={complete} type="checkbox" onChange={e => toggleTodo(id, e.target.checked)} />
        <label htmlFor={id}>{title}</label>
    </li>
}