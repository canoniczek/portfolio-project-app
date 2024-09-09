import { useState, useEffect } from 'react';
import { getUsersByUserId } from './supabase/supabase';


function UsersList() {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
          try {
            const data = await getUsersByUserId(); 
            setUsers(data); 
          } catch (err) {
            setError(err.message); 
          }
        })();
      }, []);

    return (
        <>
            <div>
      <h2>Lista użytkowników</h2>

      {error && <p style={{ color: 'red' }}>Błąd: {error}</p>}

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Utworzono</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.created_at}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">Brak danych do wyświetlenia</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
        </>
    )
}


export default UsersList;