import Form from "./Form"
import Card from "../ui/Card"
//import { useState } from "react"

const FormCard = props => {
  const { onAddGroceryItem} = props
  const getGroceryData = (data) => {
    console.log(data)
    onAddGroceryItem()
  }
  return (
    <Card className="form-card">
      <Form itemHandler={getGroceryData}></Form>
    </Card>
  )
}

export default FormCard