import { useState } from 'react'
import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';


export const DateTimePicker = () => {
    const [date, setDate] = useState(new Date())

    return (
        <>
            <Calendar value={date} onChange={setDate} />
        </>
    )
}

