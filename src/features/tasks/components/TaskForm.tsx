interface PropsTaskForm {
    onAddTask: (title: string) => void;
    inputText: string
    setInputText: (value: string) => void
}

function TaskForm({onAddTask, inputText, setInputText}: PropsTaskForm) {

    
    return (
        <>        
            <input type="text" value={inputText} onChange={(e) => {setInputText(e.target.value)}}/>
            <button onClick={() => {onAddTask(inputText); setInputText('')}}>Додати</button>
        </>

    )
}

export default TaskForm