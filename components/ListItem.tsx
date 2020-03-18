import * as React from 'react'

import { ShoppingMemo } from '../interfaces'

type Props = {
  data: ShoppingMemo
  removeItem: (id: number) => void
}

const ListItem: React.FunctionComponent<Props> = ({ data, removeItem }) => (
  <ul>
    <li>{data.item_name}</li>
    <li>{data.amount}</li>
    <li>{data.unit}</li>
    <li><button onClick={() => removeItem(data.id)}>x</button></li>
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
