import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

function TodoInput({ todoField, handleField, onSubmitAdd }) {
  const [visible, setVisible] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (todoField) {
      onSubmitAdd(e)
    } else {
      setVisible(visible => !visible)
    }
  }

  return (
    <>
      <div>
        <h1 className={`subtitle has-text-centered title-color `}>TodoList</h1>
        <form onSubmit={handleSubmit}>
          <div className='field'>
            <div className='control has-icons-left'>
              <input
                className='input is-info is-medium'
                type='text'
                value={todoField}
                onChange={e => handleField(e.target.value)}
                placeholder={'할일을 입력하세요.'}
              />
              <span className='icon is-small is-left'>
                <FontAwesomeIcon icon={faPen} />
              </span>
            </div>
          </div>
        </form>
      </div>
      <div className={`modal ${visible ? 'is-active' : ''}`}>
        <div className='modal-background' />
        <div className='modal-content'>
          <div className='box'>
            <p>할일을 입력하세요.</p>
          </div>
        </div>
        <button className='modal-close is-large' aria-label='close'
                onClick={() => setVisible(v => !v)}
        />
      </div>
    </>
  )
}

export default TodoInput