function Footer (props) {
  console.log(props.show)
  if(!props.show) {
    return <></>
  }
  return (
    <div>
      Footer show
    </div>
  )
}

export default Footer