import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

function Index(props) {
  const router = useRouter()
  const [username, setUsername] = useState('')
  return (
    <div>
      <h2>Server Side Rendering</h2>
      <label htmlFor='username'>깃허브 유저네임 입력: </label>
      <input type='text' id='username' value={username}
             onChange={e => setUsername(e.target.value)}
             required={true}
      />
      <p>github username: {username}</p>
      <button onClick={() => router.push(`/user/${username}`)}>
        github 검색하기
      </button>
      <hr/>
      <h2>static props</h2>
      <Link href="/staticPropsPage">
        <a>go to static props </a>
      </Link>
    </div>
  )
}

export default Index