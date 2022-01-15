import axios from 'axios'

const GithubSearchPage = ({ user, now }) => {
  // console.log({ user })
  const { blog, bio, avatar_url } = user
  return (
    <div>
      <h3>Github</h3>
      <span>{now}</span>
      <div>blog</div>
      <div>{blog}</div>
      <div>bio</div>
      <div>{bio}</div>
      <div>avatar</div>
      <div>
        <img src={avatar_url} alt='avatar img' />
      </div>
    </div>
  )
}

// 서버 사이드 렌더링
// 여기서 api 호출후에 component 에 props 으로 전달함
export const getServerSideProps = async ({ query }) => {
  const props = { user: null , now: new Date().toISOString() }
  const { username } = query
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`)
    // console.log({ response })
    if (response && response.status == 200) {
      props.user = response.data
    }
  } catch (e) {
    console.error({ e })
    return props.user = e.message
  }

  return {
    // props key 로 전달 해야 함!
    props: props,
  }
}


export default GithubSearchPage

