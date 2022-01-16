import React, { useState } from 'react'
import Link from 'next/link'


function Index(props) {
  const [username, setUsername] = useState('')

  return (
    <div>
      <h2>Go to Github</h2>
      <label htmlFor='username'>github username:</label>
      <input type='text' id='username' value={username} onChange={e => setUsername(e.target.value)}
        style={{ marginRight: '15px'}}
      />
      <Link href={`/github/${username}`}>
        <a>go to github</a>
      </Link>
    </div>

  )
}

export default Index