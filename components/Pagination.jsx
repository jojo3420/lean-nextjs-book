import React, { useCallback } from 'react'
import Link from 'next/link'
import css from 'styled-jsx/css'
import { useRouter } from 'next/router'

const style = css`
  div.pagination {
    border: 1px solid rgba(27, 31, 35, 0.25);
    border-radius: 3px;
    width: fit-content;
    margin: 20px auto auto;
  }

  button.btn {
    width: 150px;
    padding: 6px 12px;
    font-size: 14px;
    border: 0;
    color: #0366d6;
    font-weight: bold;
    cursor: pointer;
    outline: none;
  }
  button.btn:first-child {
  border-right: 1px solid rgba(27, 31, 35, 0.15);
  }
  button.btn:hover:not([disabled]) {
    background-color: #0366d6;
    color: white;
  }

  button.btn:disabled {
    color: rgba(27, 31, 35, 0.3);
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
      <button className="btn" onClick={() => onClickPage(page - 1)} disabled={page === 1}>Prev</button>
      <button className="btn" onClick={() => onClickPage(page + 1)} disabled={page === endPage}>Next</button>
      <style jsx>{style}</style>
    </div>
  )
}

export default Pagination