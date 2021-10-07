

export default function TodoList(props){
    const {afazeres, handleTodo} = props

    return(
        <ul>
            {afazeres.map((item) => <li>{item}   <button onClick={(e) => handleTodo(item)}>Concluir tarefa</button></li>)}
        </ul>
    )
}