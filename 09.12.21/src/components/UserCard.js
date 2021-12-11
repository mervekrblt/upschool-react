function UserCard({user}) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div>{user.name}</div>
      </div>
    </div>
  )
}

export default UserCard