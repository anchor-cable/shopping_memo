import * as React from 'react'
import Head from 'next/head'

type Props = {
  title?: string
}

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '3px solid #64C99B',
  borderRadius: '10px'
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = '買い物メモ',
}) => (
  <div style = {layoutStyle}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
    </header>
    {children}
    <footer>
      <hr />
      <span>copyright (c) 2020 @anchor_cable all rights reserved.</span>
    </footer>
  </div>
)

export default Layout
