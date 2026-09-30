function User({ id, name, email, username }) {
    return (
        <div style={{ border: `${pixels} solid black`, padding: "10px" }}>
            <div>{id}</div>
            <div>{name}</div>
            <div>{email}</div>
            <div>{username}</div>
        </div>
    );
}
export default User;