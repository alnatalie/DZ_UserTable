import UserTable from "../components/UserTable";
import {useState} from 'react';

export default function UsersTableButton() {
    const [isShowTable, setIsShowTable] = useState(false);
  return <>
      <h1>Users Table</h1>
      <button onClick ={()=> setIsShowTable(!isShowTable)}>Show Users Table</button>
      {isShowTable && <UserTable />}
    </>;
}