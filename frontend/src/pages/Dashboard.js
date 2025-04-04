import { useEffect, useState } from "react";
import { getUsers } from "../services/api";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((response) => setUsers(response.data));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
