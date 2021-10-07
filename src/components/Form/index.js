import { useState } from "react"



export default function Form(props){
    const {addTodo} = props
    const [input, setInput] = useState()
    return(
        <div>
            <input onChange={(e) => setInput(e.target.value)} />

            <button onClick={() => addTodo(input)} >Enviar</button>
        </div>
    )
}