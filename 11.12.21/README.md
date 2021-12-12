
# Lesson 4 - 11.12.2021

## Contents
- How to send props?
- Create a form with bootstrap and react
- onSubmit - preventDefault()
- Child to parent data transfer
- Control complete/uncomplete and delete item

## How to send props

- First way

```
// App.js

<Card item={item} anotherData={anotherData} />

// Card.js

function Card(props) {
  console.log(props.item, props.anotherData)
  // item: {id: 1, title: 'Learn how to learn', isDone: false}
}
```

- Second way

```
// App.js

<Card item={item} anotherData={anotherData} />

// Card.js

function Card(props) {
  const {item} = props.item
  const {anotherData} = props.anotherData

  console.log(item, anotherData)
  // {id: 1, title: 'Learn how to learn', isDone: false}
}
```

- Third way

```
// App.js

<Card item={item} anotherData={anotherData} />

// Card.js

function Card({item, ...props}) {
  console.log(item, props.anotherData)
}
```

### Notes

- `className={`border w-50 ${item.isDone && "bg-success"}`} >{item.title}`
- `e.target.${name}.value`
- Add new object in array `setTodos(item => [newTodo, ...item])`
- `let data = false
  function changeColor () {
    data = !data
    console.log(!data)
  } `