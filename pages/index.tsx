import * as React from 'react'
import Layout from '../components/Layout'
import MemoList from '../components/MemoList'
import { NextPage } from 'next'
import { ShoppingMemo } from '../interfaces'

type Props = {
    items: ShoppingMemo[]
}

const IndexPage: NextPage<Props> = () => {
  return (
    <Layout title="一覧 | 買い物メモ">
      <h1>買い物メモ</h1>
      <MemoList/>
    </Layout>
  )
}

export default IndexPage
