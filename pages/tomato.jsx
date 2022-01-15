import React from 'react'
import Link from 'next/link'


function Tomato() {
  return (
    <div>
      <h2>Tomato</h2>
      <Link href='/'>
        <a>Go to Home</a>
      </Link>
      <hr/>
    </div>
  )
}

export default Tomato