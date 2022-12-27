import { listService } from '../services/listService'

export function AddList() {

  return (
    <section className='add-list flex column'>
      <h3>Create new list</h3>
      <input type="text" />

      <div className="actions">
        <button>Cancel</button>
        <button>Done</button>
      </div>
    </section>
  )
}