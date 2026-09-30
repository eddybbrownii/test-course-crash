import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import User from "../components/User";

function Home() {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    async function fetchUsers() {
    try {
        const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(data);
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
    }

    const timer = setTimeout(() => {
    fetchUsers();
    }, 2000);

    return () => clearTimeout(timer);
}, []);

function renderUsers() {
    return users.map((user) => (
        <Link to={`/users/${user.id}`} key={user.id}>
        <User
        id={user.id}
        name={user.name}
        email={user.email}
        username={user.username}
        />
    </Link>
    ));
}

function renderSkeletonLoading() {
    return (
    <div>
        <p>Loading...</p>
    </div>
    );
}

return <div>{loading ? renderSkeletonLoading() : renderUsers()}</div>;
}

export default Home;