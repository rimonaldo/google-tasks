import { listService } from '../services/listService'
import { useEffect, useRef, useState } from 'react'
export function AddList() {

  const inputRef = useRef()

  const onAddList = () => {
    inputRef.current.value
  }

  return (
    <section className='add-list flex column'>
      <h3>Create new list</h3>
      <input className='' ref={inputRef} type="text" />

      <div className="actions">
        <button>Cancel</button>
        <button onClick={onAddList}>Done</button>
      </div>
    </section>
  )
}