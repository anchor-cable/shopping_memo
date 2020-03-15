import * as React from 'react'
import ListItem from '../components/ListItem'
import { ShoppingMemo } from '../interfaces';

type Props = {
  items: ShoppingMemo[]
}

const List: React.FunctionComponent<Props> = ({ items }) => (
<>
  {items &&(
    <ul>
    {items.map(item => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
  )}
  {!items &&(
   <ul>
     おや。なーんもない。
   </ul> 
  )}
</>
);


export default List
