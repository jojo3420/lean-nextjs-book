import React from 'react'
import formatDistance from 'date-fns/formatDistance'
import css from 'styled-jsx/css'

const style = css`
  div.repos-wrapper {
    width: 100%;
    height: 100vh;
    overflow: scroll;
    padding: 0 16px;
  }

  div.header {
    padding: 16px 0;
    font-size: 14px;
    font-weight: 600;
    border-bottom: 1px solid #e1e4e8;
  }

  span.repo-count {
    display: inline-block;
    padding: 2px 5px;
    margin-left: 6px;
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
    color: #586069;
    background-color: rgba(27, 31, 35, 0.08);
    border-radius: 20px;
  }

  div.repo-item {
    width: 100%;
    border-bottom: 1px solid #e1e4eb;
    padding: 24px 0;
  }

  h2.item-name {
    margin: 0;
    color: #0366d6;
    font-size: 20px;
    display: inline-block;
    cursor: pointer;
  }
  
  p.item-description {
    padding: 12px 0;
  }
  a {
    text-decoration: none;
  }
  p.item-language {
    margin: 0;
    font-size: 14px;
  }

  span.updated_at {
    margin-left: 20px;
  }

`

function Repository({ user, repositories, page, rows }) {
  if (repositories.length <= 0) return <div>empty repository</div>

  const { login } = user
  return (
    <div className='repos-wrapper'>
      <div className='header'>
        Repositoies <span className='repo-count'>{repositories.length}</span>
      </div>
      {repositories.slice((page - 1) * rows, page * rows).map(item => {
        const { name: repoName, description, language, updated_at } = item
        const url = `https://github.com/${login}/${repoName}`
        return (
          <div className='repo-item' key={item.id}>
            <a target='_blank' rel='noopener noreferrer' href={url}>
              <h2 className='item-name'>{repoName}</h2>
              <p className='item-description'>{description}</p>
              <p className='item-language'>{language}
                <span className='updated_at'>
                  {formatDistance(new Date(updated_at), new Date(), { addSuffix: true })}
                </span>
              </p>
            </a>
          </div>
        )
      })}
      <style jsx>{style}</style>
    </div>

  )
}

export default Repository