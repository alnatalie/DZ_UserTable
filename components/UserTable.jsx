import { useEffect, useState } from "react";

export default function UserTable() {
  const [users, setUsers] = useState([]),
    [isError, setIsError] = useState(null),
    [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getUserData = async () => {
      setIsLoading(true);
      try {
        const respone = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        ).then((res) => {
          if (!res.ok) {
            throw new Error(res.status);
          }
          return res.json();
        });
        setUsers(respone);
      } catch (err) {
        setIsError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getUserData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <div>
          {isError ? (
            <div>Error</div>
          ) : (
            <table>
              <thead>
                <tr>
                  <td>id</td>
                  <td>name</td>
                  <td>email</td>
                  <td>city</td>
                  <td>phone</td>
                  <td>website</td>
                  <td>company name</td>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address.city}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                    <td>{user.company.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}
