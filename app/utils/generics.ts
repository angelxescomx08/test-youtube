function filterByProperty<T, K extends keyof T>(items: T[],key: K, value: T[K]){
  return items.filter(item => item[key] === value)
}

const products = [
  {
    id: 1,
    name: "Laptop",
    category: "electronics"
  },
  {
    id: 2,
    name: "Shirt",
    category: "clothing"
  },
]

const filteredProducts = filterByProperty(products, "name", "Laptop")
filterByProperty