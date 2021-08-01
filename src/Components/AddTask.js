import {useState} from "react"



function AddTask({onSubmit}) {
    const [text, setText] = useState("")
    const [date, setDate] = useState("")
    const [reminder, setReminder] = useState("")

    const onAdd = (event) => {
        event.preventDefault()

        if (!text) {
            alert("Please type a task")
            return
        }

        onSubmit ({text, date, reminder})

        setText("")
        setDate("")
        setReminder(false)
    }

    return (
        <form onSubmit={onAdd} className="add-form">
            <div className="form-control">
                <label>Task</label>
                <input 
                    type="text" 
                    placeholder="add task" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Time</label>
                <input 
                    type="text" 
                    placeholder="add day and time" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input 
                    type="checkbox"
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type="submit" value="Save Task" className="btn btn-block"/>
        </form>
    )
}

export default AddTask
