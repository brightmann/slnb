import Head from 'next/head'
import Header from './Header'
import config from '../config'

const layoutStyle = {
  maxWidth: 672,
  margin: 'auto',
  padding: '42px 21px',
}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Head>
        <title>{config.user.name}的前端博客</title>
      </Head>
      <Header />
      {props.children}
    </div>
  )
}
