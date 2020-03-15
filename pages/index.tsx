import * as React from 'react'
import Layout from '../components/Layout'
import MemoList from '../components/MemoList'
import { NextPage } from 'next'
import { ShoppingMemo } from '../interfaces'

type Props = {
    items: ShoppingMemo[]
}

function getPosts() {
    return [
        { id: 1, item_name:"トイレットペーパー", amount:12,unit:"ロール" },
        { id: 2, item_name:"ティッシュペーパー", amount:5,unit:"箱" },
        { id: 3, item_name:"マスク", amount:60,unit:"枚" },
    ]
}

const IndexPage: NextPage<Props> = ({items=getPosts()}) => {
  return (
    <Layout title="一覧 | 買い物メモ">
      <h1>買い物メモ</h1>
      <MemoList items = {items} />
    </Layout>
  )
}

export default IndexPage
