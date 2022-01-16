import React, { useState } from 'react'
import axios from 'axios'
import css from 'styled-jsx/css'
import { GoMail } from 'react-icons/go'
import Repository from '../../components/Repository'
import { userData, reposData } from '../../data'
import Pagination from '../../components/Pagination'

const style = css`
  .box {
    width: 25%;
    max-width: 272px;
    margin-right: 26px;
  }

  .profile-wrapper {
    width: 100%;
    border: 1px solid #e1e4e8;
  }

  .profile-wrapper, .profile-image {
    display: block;
    width: 100%
  }

  .username {
    margin: 0;
    padding: 16px 0 0 0;
    font-size: 26px;
  }

  .login {
    margin: 0;
    font-size: 20px;
  }

  .bio {
    margin: 0;
    padding-top: 16px;
    font-size: 14px;
  }

`

function GithubPage({ user, repositories, page, rows }) {
  if (!user) return <div>유저 정보가 없습니다.</div>
  const { login, bio, blog, email, avatar_url, created_at, company, name } = user
  return (
    <>
      <div className='box'>
        <div className='profile-wrapper'>
          <img
            src={avatar_url}
            alt={`${name} image`}
            className='profile-wrapper'
          />
        </div>
      </div>
      <h2 className='username'>{name}</h2>
      <p className='login'>{login}</p>
      <p className='bio'>{bio}</p>
      <p className='info'>
        <GoMail size={16} />
        <span className='email'>{email || 'NOT FOUND'}</span>
      </p>
      <Repository user={user} repositories={repositories} page={page} rows={rows} />
      <Pagination login={login} page={page} endPage={Math.ceil(repositories.length / rows)} />
      <style jsx>{style}</style>
    </>
  )

}


export const getServerSideProps = async ({ query }) => {
  const rows = 5
  let { username, page } = query
  page = parseInt(page, 10)
  if (isNaN(page)) page = 1
  const props = { user: userData, repositories: reposData, page, rows }
  // const url = `https://api.github.com/users/${username}`
  // const url2 = `${url}/repos?page=${props.page}&per_page=${props.rows}`
  try {
    // const res = await axios.get(url)
    // console.log({ res })
    // if (res.status == 200)
    //   props.user = res.data

    // const response = await axios.get(url2)
    // console.log({ response })
    // if (response.status == 200)
    //   props.repositories = response.data
  } catch (e) {
    console.error({ e })
    return { props: { ...props, e: e.message } }
  }
  return { props }
}

export default GithubPage