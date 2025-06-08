function UserGreetings(props) {
    if (props.isLoggedIn){
        return <h2>Welcome {props.name}!</h2>
    }
    return <h2>Please log in.</h2>
}
export default UserGreetings;