import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [afazeres, setAfazeres] = useState([]);
  console.log(afazeres)

  function handleTodo(remover){
    setAfazeres(afazeres.filter((item) => (item !== remover)))
  }

  function addTodo(newTodo){
    setAfazeres([...afazeres, newTodo])
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form addTodo={addTodo}/>
        <TodoList afazeres={afazeres} handleTodo={handleTodo} />
      </header>
    </div>
  );
}

export default App;
