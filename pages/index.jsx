import React from 'react'

function Index(props) {
  return (
    <div>
      <h1>스태틱 경로에 정적 자원사용하기</h1>
      <img src="img/cat.jpeg" alt="cat"/>
      <hr/>
      <br/>
      <audio
        controls={true}
        src="mp3/01 H.I.S.Monologue.mp3">
        your browser does not support the
        <code>audio</code> element.
      </audio>

    </div>
  )
}

export default Index