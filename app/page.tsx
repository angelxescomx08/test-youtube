import { ReactNode } from "react";

type Props<T> = {
  items: T[];
  renderItem: (item: T)=>ReactNode
}

function List<T>({ items, renderItem }:Props<T>){
  return (
    <ul>
      {
        items.map((item,index)=>(
          <li key={index}>
            {renderItem(item)}
          </li>
        ))
      }
    </ul>
  )
}

export default function Home() {
  return (
    <main>
      <List items={[
        {
          id: 1,
          name: "Laptop"
        },
        {
          id: 2,
          name: "Cellphone"
        },
        {
          id: 3,
          name: "Tablet"
        },
      ]} renderItem={(product)=>product.name} />
    </main>
  );
}
