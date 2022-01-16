import React, { useState } from 'react'
import axios from 'axios'

import Repository from '../../components/Repository'
import { user, repositories } from '../../data'
import Pagination from '../../components/Pagination'
import Profile from '../../components/profile'
import css from 'styled-jsx/css'

const style = css`
  .main-container {
    display: flex;
    padding: 20px;
  }
`


function GithubPage({ user, repositories, page, rows }) {
  if (!user) return <div>유저 정보가 없습니다.</div>
  return (
    <div className='main-container'>
      <Profile user={user} />
      <Repository user={user} repositories={repositories} page={page} rows={rows} />
      <Pagination login={user.login} page={page} endPage={Math.ceil(repositories.length / rows)} />


      <style jsx>{style}</style>
    </div>
  )

}


export const getServerSideProps = async ({ query }) => {
  const rows = 5
  let { username, page } = query
  page = parseInt(page, 10)
  if (isNaN(page)) page = 1
  const props = { user, repositories, page, rows }
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