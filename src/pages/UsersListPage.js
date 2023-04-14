import React, {useState} from 'react'
import UsersList from '../components/UsersList'
import UserListFilter from '../components/UserListFilter'

function UsersListPage({users, userTypes, setUsersList, usersOriginal, isAllowEdit}) {
  const [loading, setLoading] = useState(false)
  return (
    <div>
      <UserListFilter userTypes={userTypes} setUsersList={setUsersList} users={usersOriginal} setLoading={setLoading}/>
      {!loading ? 
        <UsersList users={users} userTypes={userTypes} setUsersList={setUsersList} usersOriginal={usersOriginal} isAllowEdit={isAllowEdit}/>
        :
        <p>loading...</p>
        }
    </div>
  )
}

export default UsersListPage