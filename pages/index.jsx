import React, { useState } from 'react'
import Link from 'next/link'


const Index = () => {
  const [name, setName] = useState('')
  return <div>
    <h1>Learn router</h1>
    <Link href='/tomato'>
      <a>go to tomato page</a>
    </Link>
    <hr />
    <div>
      <h3>Vegatable Name</h3>
      <input type='text' value={name} onChange={e => setName(e.target.value)}
      style={{ marginRight: '15px'}}
      />
      <Link href={`/vegatable/${name}`}>
        <a>
          Go to [name].jsx
        </a>
      </Link>
      <p>name: {name}</p>
    </div>
    <hr/>
    <div>
      <h2>Link 컴포넌트와 a태그 비교</h2>
      <Link href="/tomato">
        <a>tomato</a>
      </Link>
      <div>------------------------</div>
      <a href='/tomato'>a태그 /tomato 이동</a>
    </div>
    <p>
      Link 컴포넌트의 경우 js history api 사용한다.
    </p>
  </div>
}

export default Index
