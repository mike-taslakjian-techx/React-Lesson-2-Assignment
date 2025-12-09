import "./header.css";

const Header = (props) => {
    const { theme, setTheme } = props;

    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
    };
    
    return (
        <header>
            <h1>My To Do List</h1>
            <button className="theme-btn" onClick={toggleTheme}>
                {theme === "light" ? "Dark" : "Light"}
            </button>
        </header>
    );
};

export { Header };