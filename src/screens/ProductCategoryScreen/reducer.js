export default (data, id) => {
  const items = []

  if (data && data.productsCollection && data.productsCollection.items) {
    for (let i = 0; i < data.productsCollection.items.length; i += 1) {
      if (
        data.productsCollection.items[i].category &&
        data.productsCollection.items[i].category.sys &&
        data.productsCollection.items[i].category.sys.id &&
        data.productsCollection.items[i].category.sys.id === id
      ) {
        items.push(data.productsCollection.items[i])
      }
    }
  }

  return items
}
