import React, {useCallback} from 'react'
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
  const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
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

  const addItem = useCallback((itemName: string) => {
    const newItem = {
      id: Number(new Date()),
      item_name: itemName,
      amount: 1,
      unit: "個"
    }
    // TODO: APIに投げる
    setItems([newItem, ...items])
  }, [items])

  const removeItem = useCallback((id: number) => {
    const newItems = items.filter(item => item.id !== id)
    // TODO: APIに投げる
    setItems(newItems)
  }, [items])

  return (
    <>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <ListItem data={item} removeItem={removeItem} />
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
