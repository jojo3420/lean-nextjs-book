import React from 'react'
import { GoLink, GoLocation, GoOrganization } from 'react-icons/go'
import css from 'styled-jsx/css'

const style = css`
  .profile-box {
    width: 25%;
    max-width: 272px;
    margin-right: 26px;
  }

  .profile-img-wrapper {
    width: 100%;
    border: 1px solid #e1e4e8;
  }

  .profile-img-wrapper, .profile-image {
    display: block;
    width: 100%
  }

  .username {
    margin: 0;
    padding: 16px;
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

  .user-info {
    display: flex;
    //align-items: center;
    margin: 4px 0 0 0;
  }

  .user-info-text {
    margin-left: 6px;
  }
`

function Profile({ user }) {
  const { login, bio, blog, location, avatar_url, created_at, company, name } = user

  return (
    <>
      <div className='menu-box'>
        <div className='profile-img-wrapper'>
          <img
            src={avatar_url}
            alt={`${name} image`}
            className='profile-image'
          />
        </div>
      </div>
      <h2 className='username'>{name}</h2>
      <p className='login'>{login}</p>
      <p className='bio'>{bio}</p>
      <p className='user-info'>
        <GoLocation size={16} />
        <span className='user-info-text'>{location || 'NOT FOUND'}</span>
      </p>
      <p className='user-info'>
        <GoOrganization size={16} />
        <span className='user-info-text'>{company || 'NOT FOUND'}</span>
      </p>
      <p className='user-info'>
        <GoLink size={16} />
        <span className='user-info-text'>{blog || 'NOT FOUND'}</span>
      </p>
      <style jsx>{style}</style>
    </>
  )
}

export default Profile