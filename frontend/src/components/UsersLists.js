import React, { useEffect, useState } from 'react';
import { getUsers } from './API';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>All Users</h2>
      <ul>
        {users.map(u => <li key={u._id}>{u.name} - {u.email}</li>)}
      </ul>
    </div>
  );
};

export default UsersList;
