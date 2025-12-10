import "./todoApp.css";
import { TodoForm } from "../TodoForm/TodoForm";
import { useState } from "react";
import { TodoList } from "../TodoList/TodoList";

const TodoApp = () => {
    const [todo, setTodo] = useState([]);
    const [filter, setFilter] = useState("All");

    return (
        <main>
            <TodoForm todoFunction={setTodo} setFilter={setFilter} />
            <TodoList todoArr={todo} todoFunction={setTodo} filter={filter} />
        </main>
    );
};

export { TodoApp };