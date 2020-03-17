import * as React from 'react'
import ListItem from '../components/ListItem'
import { ShoppingMemo } from '../interfaces';
import useSWR from 'swr';

function fetcher(url:string) {
  return fetch(url).then(r => r.json());
}

const ItemForm: React.FC<{
  addItem: (name: string) => void
}> = (props) => {
  const [value, setValue] = React.useState("")
  const onSubmit = (event: any) => {
    console.log('submit', event)
    props.addItem(value)
    event.preventDefault()
    setValue('')
  }
  return <form onSubmit={onSubmit}>
    <input type='text' value={value} onChange={(e) => setValue(e.target.value)} />
    <input type='submit' value="送信" />
  </form>
}

const List: React.FunctionComponent = () => {
  const { data, error } = useSWR('/api/memoList', fetcher);
  const [items, setItems] = React.useState<ShoppingMemo[]>([])

  React.useEffect(() => {
    if (data)
      setItems(data.items)
  }, [data])

  const addItem = (itemName: string) => {
    const newItem = {
      id: Number(new Date()),
      item_name: itemName,
      amount: 1,
      unit: "個"
    }
    setItems([newItem, ...items])
  }

  return (
    <>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <ListItem data={item} />
          </li>
        ))}
      </ul>
      {error &&(
      <ul>
        おや。なーんもない。
      </ul> 
      )}
      <ItemForm addItem={addItem} />
    </>
  )
};


export default List
