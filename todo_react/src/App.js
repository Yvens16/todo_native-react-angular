import { useState } from 'react'
import './App.css'

function App () {
  // Il faut savoir que react à une certaine nomenclature à suivre  que vous avez dû voir sur la doc

  // Ici on crée des states pour gérer le contenu d'une tâche et "les tâches" elles même
  // On utilise la méthode useState
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  // La fonction qui permet de conserver les lettre entrées dans l'input
  const handleChange = e => {
    setTodo(e.target.value)
  }

  // La fonction qui permet d'ajouter une tâche à notre liste de tâches
  const addItem = () => {
    setTodoList(prevState => [...prevState, todo])
    setTodo('')
  }
  // La fonction qui permet de supprimer une tâche  de liste de tâches
  const deleteTodo = index => {
    todoList.splice(index, 1); // On retire l'élément que l'on veut supprimer
    setTodoList([...todoList]); // Et on met à jour notre state (notre liste ici)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>React ToDo List</h1>
      </header>
      <div>
        {/* On appelle notre fonction handleChange à chaque lettre entrée grâce à la méthode onChange */}
        <input value={todo} type='text' name='' id='' onChange={handleChange} />
        {/* On appelle notre fonction addItem lorsque l'on clique sur le boutton grâce à la méthode onClick */}
        <button onClick={addItem}> Créer la tâche</button>
      </div>
      {/* Ici affiche notre liste de tâche */}
      {todoList.map((e, idx) => (
        // La clé permet à React de bien afficher les bon éléménts avec la meilleur performance possible
          <div key={idx}>
            <span>{e}</span>
            {/* Grâce à la méthode onClick on appelle la fonction deleteTodo */}
            <button onClick={deleteTodo}>x</button>
          </div>
        ))}
    </div>
  )
}

export default App
