
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
