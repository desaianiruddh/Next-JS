/** @jsxImportSource theme-ui */
import axios from 'axios';
import { useState, useEffect } from 'react';

const index = () => {
  const [userList, setUserList] = useState([]);
  const [showUser, setShowUser] = useState(false);
  useEffect(async () => {
    const response = await axios.get('/api/user-list', {
      header: 'List',
    });
    const data = response.data;
    setUserList(data);
  }, [showUser]);
  const deleteUser = async (id) => {
    const res = await axios.delete(`/api/user-list/${id}`);
    setUserList(res.data);
  };
  return (
    <div sx={{ textAlign: 'center' }}>
      <button
        sx={{ variant: 'containers.button', color: 'white', my: '50px' }}
        onClick={() => setShowUser(true)}
      >
        Get User List
      </button>
      {userList.length === 0 && (
        <div sx={{ fontSize: '3', color: 'gray' }}>No user Found</div>
      )}
      {showUser &&
        userList.map((user, index) => {
          return (
            <div key={user.id} sx={{ fontSize: '3', color: 'gray' }}>
              {index + 1}. {user.name}
              <button
                sx={{
                  variant: 'containers.button',
                  color: 'white',
                  p: '5px',
                  ml: '10px',
                }}
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default index;
