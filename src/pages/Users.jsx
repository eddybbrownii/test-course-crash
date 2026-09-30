// import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Users() {
const { id } = useParams();
const [user, setUser] = useState({});

async function fetchUser() {
    try {
    const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    setUser(data);
    } catch (error) {
    console.error(error);
    }
}

useEffect(() => {
    const timer = setTimeout(() => {
    fetchUser();
    }, 2000);

    return () => clearTimeout(timer);
}, [id]);

return (
    <div>
    <Link to="/">Go Back</Link>
    <p>{user.id}</p>
    <p>{user.name}</p>
    <p>{user.email}</p>
    <p>{user.username}</p>
    </div>
);
}

export default Users;