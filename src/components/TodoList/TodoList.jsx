import "./todoList.css";

const TodoList = (props) => {
    const { todoArr, todoFunction, filter } = props;

    const filteredList = todoArr.filter((todo) => {
        if (filter === "All") {
            return true;
        } else if (filter === "Completed") {
            return todo.completed
        } else if (filter === "Pending") {
            return !todo.completed;
        }
    });

    const deleteTodo = (id) => {
        todoFunction(todoArr.filter((todo) => todo.id !== id));
    };

    const completeTodo = (id) => {
        todoFunction(todoArr.map((todo) => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed};
            } else {
                return todo;
            }
        }));
    };

    const editTodo = (id) => {
        todoFunction(todoArr.map((todo) => {
            if (todo.id === id) {
                return {...todo, editing: !todo.editing};
            } else {
                return todo;
            }
        }));
    };

    const changeText = (id, newTodo) => {
        todoFunction(todoArr.map((todo) => {
            if (todo.id === id) {
                return {...todo, todo: newTodo}
            } else {
                return todo;
            }
        }));
    };
    
    return (
        <section className="todoList">
            {
                filteredList.map((todoItem) => {
                    const { todo, importance, id, completed, editing } = todoItem;
                    let color = "";

                    if (importance === "Low") {
                        color = "var(--green)";
                    } else if (importance === "Medium") {
                        color = "var(--orange)";
                    } else {
                        color = "var(--red)";
                    }

                    console.log(editing);

                    return (
                        <div className="todoItem" key={id}>
                            <div>
                                {editing ? <input type="text" value={todo} onChange={(e) => changeText(id, e.target.value)} /> : <h2 className={completed ? "completed" : ""}>{todo}</h2>}
                                <p style={{ color: color }}>{importance}</p>
                            </div>
                            <div className="btn-container">
                                <button className="delete btn" onClick={() => deleteTodo(id)}><i className="fa-solid fa-trash"></i></button>
                                <button className="complete btn" onClick={() => completeTodo(id)}><i className="fa-solid fa-check"></i></button>     
                                <button className="btn" onClick={() => editTodo(id)}><i className="fa-regular fa-pen-to-square"></i></button>        
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
};

export { TodoList };