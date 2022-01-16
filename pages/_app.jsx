import React from 'react'
import Header from '../components/Header'


function _app(props) {
  // console.log({ props })
  const { Component, pageProps } = props
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Noto Sans KR', sans-serif;
        }
      `}</style>
    </div>
  )
}

export default _app