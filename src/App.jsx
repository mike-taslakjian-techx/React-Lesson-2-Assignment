import { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { TodoApp } from './components/TodoApp/TodoApp';

function App() {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark" : "";
  }, [theme]);

 return (
  <>
    <Header theme={theme} setTheme={setTheme} />
    <TodoApp />
  </>
 )
};

export default App;
