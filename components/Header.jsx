import React, { useCallback, useState } from 'react'
import css from 'styled-jsx/css'
import { IoLogoGithub } from 'react-icons/io'
import { useRouter } from 'next/router'

const style = css`
  div.header-wrapper {
    padding: 14px;
    background-color: #24292e;
    line-height: 0;
    display: flex;
    align-items: center;
  }
  form input {
    margin: 0 16px;
    background-color: hsl(0, 0%, 100%, 0.125);
    width: 300px;
    height: 28px;
    border: none;
    border-radius: 5px;
    outline: none;
    color: white;
    padding: 0 12px;
    font-size: 14px;
    font-weight: bold;
  }
  nav.header-navi a {
    color: white;
    margin-right: 15px;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
  }
`

function Header() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const handleSubmit = useCallback(e => {
    e.preventDefault()
    router.push(`/github/${username}`)
  }, [username])

  return (
    <div>
      <div className='header-wrapper'>
        <IoLogoGithub color='white' size={36} />
        <form onSubmit={handleSubmit}>
          <input type='text'
                 value={username}
                 onChange={e => setUsername(e.target.value)}
          />
        </form>
        <nav className='header-navi'>
          <a href='https://github.com/pulls'>Pull requests</a>
          <a href='https://github.com/issues'>Issues</a>
          <a href='https://github.com/marketplace'>Marketplace</a>
          <a href='https://github.com/explore'>Explore</a>
        </nav>
      </div>
      <style jsx>{style}</style>
    </div>
  )
}

export default Header