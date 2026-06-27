import { useState } from "react";

function TaskForm({onAdd}: {onAdd: (title: string) => void}) {
    const [inputText, setInputText] = useState('')
    
    return (
        <>        
            <input type="text" value={inputText} onChange={(e) => {setInputText(e.target.value)}}/>
            <button onClick={() => {onAdd(inputText); setInputText('')}}>Додати</button>
        </>

    )
}

export default TaskForm