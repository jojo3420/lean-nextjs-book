import React, { useCallback, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

function Index(props) {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const handleSubmit = useCallback(e => {
    e.preventDefault()
    router.push(`/github/${username}`)
  }, [username])


  // 에러 페이지 확인 _error.jsx
  // useEffect(() => {
  //   throw DOMException()
  // }, [])

  return (
    <div>
      <h2>Go to Github</h2>
      <label htmlFor='username'>github username:</label>
      <form onSubmit={handleSubmit}>
        <input type='text' id='username' value={username} onChange={e => setUsername(e.target.value)}
               style={{ marginRight: '15px' }}
        />
        <button type='submit'>
          go to github
        </button>
      </form>

    </div>

  )
}

export default Index