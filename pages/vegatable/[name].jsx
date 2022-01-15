import React from 'react'
import { useRouter } from 'next/router'

function DynamicPage() {
  const router = useRouter()
  console.log({ router })
  const { query } = router

  return (
    <div>
      <h1>동적 페이지</h1>
      <p>hello {query.name}</p>
      <p>라우터 주소에 주목하세요! {router.route}</p>
      <button onClick={() => router.push('/')}>
        Go to Home
      </button>
    </div>

  )

}

export default DynamicPage