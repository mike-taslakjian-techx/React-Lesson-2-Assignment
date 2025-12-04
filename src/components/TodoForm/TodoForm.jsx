import "./todoForm.css";

const TodoForm = (props) => {
    const { todoFunction, setFilter } = props;

    const addTodo = (e) => {
        e.preventDefault();

        const id = new Date().getTime().toString();
        const todo = e.target[0].value.trim();
        const importance = e.target[1].value;

        if (todo === "") {
            return;
        }

        e.target[0].value = "";
        
        todoFunction((prevState) => [...prevState, { id: id, todo: todo, importance: importance }]);
    };  

    const filterList = (e) => {
        setFilter(e.target.value);
    };

    return (
        <form className="todoForm" onSubmit={addTodo}>
            <div className="input-group">
                <label htmlFor="todo-message">Do: </label>
                <input type="text" id="todo-message" />
            </div>
            <div className="input-group">
                <label htmlFor="importance">Importance: </label>
                <select id="importance">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
            <button type="submit">Add</button>
            <div className="input-group">
                <label>Status: </label>
                <select onChange={filterList}>
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                </select>
            </div>
        </form>
    );
};

export { TodoForm }