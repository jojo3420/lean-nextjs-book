import React from 'react'
import formatDistance from 'date-fns/formatDistance'


function Repository({ user, repositories, page, rows }) {
  if (repositories.length <= 0) return <div>empty repository</div>

  const { login } = user
  return (
    <div className='wrapper'>
      <div className='header'>
        Repositoies(<span className='repo-count'>{repositories.length}</span>)
      </div>
      {repositories.slice((page - 1) * rows, page * rows).map(item => {
        const { name: repoName, description, language, updated_at } = item
        const url = `https://github.com/${login}/${repoName}`
        return (
          <div className='repo-item' key={item.id}>
            <a target='_blank' rel='noopener noreferrer' href={url}>
              <h2 className='repo-name'>{repoName}</h2>
              <p className='description'>{description}</p>
              <p className='language'>{language}
                <span className='updated_at'>
                  {formatDistance(new Date(updated_at), new Date(), {addSuffix: true })}
                </span>
              </p>
            </a>
          </div>
        )
      })}
    </div>

  )
}

export default Repository