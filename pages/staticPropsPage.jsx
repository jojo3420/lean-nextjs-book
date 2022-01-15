import axios from 'axios'


const StaticPropsPage = ({ random, now }) => {
  return (
    <div>
      <h1>{now}</h1>
      <h2>static props page</h2>
      <p>빌드 시점에 파마미터 고정하여 빌드하여 정적 페이지 제공</p>
      <p>빌드후에 요청하면 시간이 변경되지않음!</p>
      <h2>Random Value</h2>
      <p>{random}</p>
    </div>
  )
}

export const getStaticProps = async () => {
  const random = parseInt(Math.random() * 100, 10)
  const props = { now: new Date().toISOString(), random }
  return { props: props }
}
export default StaticPropsPage