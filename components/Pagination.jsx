import React, { useCallback } from 'react'
import Link from 'next/link'
import css from 'styled-jsx/css'
import { useRouter } from 'next/router'

const style = css`
  div.pagination {

  }
  button {
    
  }
`

function Pagination({ login, page, endPage }) {
  const router = useRouter()
  if (!page) page = 1
  const onClickPage = (page) => {
    const url = `/github/${login}?page=${page}`
    router.push(url)
  }

  return (
    <div className='pagination'>
      <div>{endPage}</div>
      <button onClick={() => onClickPage(page - 1)} disabled={page === 1}>Prev</button>
      <button onClick={() => onClickPage(page + 1)} disabled={page === endPage}>Next</button>
      <style jsx>{style}</style>
    </div>
  )
}

export default Pagination