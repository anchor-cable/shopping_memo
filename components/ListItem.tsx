import * as React from 'react'

import { ShoppingMemo } from '../interfaces'

type Props = {
  data: ShoppingMemo
}

const ListItem: React.FunctionComponent<Props> = ({ data }) => (
  <ul>
    <li>{data.item_name}</li>
    <li>{data.amount}</li>
    <li>{data.unit}</li>
    <style jsx>{`
  ul {
    padding: 0;
    display: table;
  }

  li {
    list-style: none;
    margin: 15px 0;
    display: table-cell;
  }
  `}</style>
  </ul>
)

export default ListItem
