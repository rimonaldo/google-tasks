import { DateTimePicker } from "../cmps/DateTimePicker"
import 'react-calendar/dist/Calendar.css';


export function HomePage() {

  return (
    <section className='home-page'>
      <h1>Google Task</h1>
      <DateTimePicker />
    </section>
  )
}