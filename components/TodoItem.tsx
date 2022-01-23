import React, { useCallback, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faTrashAlt, faSquare } from '@fortawesome/free-solid-svg-icons'


function TodoItem({ todo, onToggle, onDelete }) {
  const { id, text, done, color } = todo
  return (
    <div className='columns'>
      <div className='column is-half is-offset-one-quarter'>
        <div className='box'>
          <div className='control'>
            <input
              className={`input ${color}`}
              name={'input field'}
              readOnly={true}
              value={text}
              style={done ? { textDecoration: 'line-through' } : {}}
              onClick={() => onToggle(id)}
            />
            <span className='icon' onClick={() => onDelete(id)}>
                  <FontAwesomeIcon icon={faTrashAlt} className='fas' />
              </span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TodoItem