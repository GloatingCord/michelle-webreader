import { useState } from 'react'

const AddTask = ({onAdd}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('please add a task')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <div className="mb-3">
                <label>Task</label>
                <input className="input" type='text' placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)}></input>
            </div>
            <div className="mb-3">
                <label>Day & time</label>
                <input className="input" type='text' placeholder="Add dat & time" value={day} onChange={(e) => setDay(e.target.value)}></input>
            </div>
            <div className="mb-3">
                <label>Reminder</label>
                <br></br>
                <input className="checkbox" type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
            </div>

            <input className="button mb-3" type="submit" value="Save Task"></input>
        </form>
    )
}

export default AddTask