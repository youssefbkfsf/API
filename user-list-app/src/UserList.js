import axios from "axios";
import { useEffect, useState } from "react";

const UserList = () => {
    const [userList, setUserList] = useState([]);
  
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          setUserList(response.data);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
    }, []);
  
    return (
      <div>
        <h1>User List</h1>
        <ul>
          {userList.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default UserList;