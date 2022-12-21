function User ({user}){
    console.log(user)
    return(
        <>
            <h6>{user.name}</h6>
            <p>{user.email}</p>
            <address>{user.website}</address>
        </>
    )
}

export default User