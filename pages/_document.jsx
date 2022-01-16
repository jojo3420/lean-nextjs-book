import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class _document extends Document {

  render() {
    return (
      <Html lang='ko'>
        <Head>
          <meta name='title' content='깃허브 레파지토리 조회 클론' />
          <meta name='description' content='깃허브 레파지토리 리스트 조회' />

          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
          <link href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap' rel='stylesheet' />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default _document