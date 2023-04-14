import React from 'react'
import UsersListHeader from './UsersListHeader'
import UsersListRow from './UsersListRow'


function UsersList({users, userTypes, setUsersList, usersOriginal, isAllowEdit}) {

  return (
    <div className='users--list'>

      <UsersListHeader/>
        {users.map((user) => (
          <UsersListRow key={user.id} user={user} setUsersList={setUsersList} users={users} isAllowEdit={isAllowEdit}/>
        ))}
    </div>
  )
}

export default UsersList