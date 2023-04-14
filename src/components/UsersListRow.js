import React from 'react'
import UsersListCell from './UsersListCell'
import userTypes from '../data/UserTypes.json'

function UsersListRow({user, users, setUsersList, isAllowEdit}) {
    const userTypeName = userTypes.find(userType => userType.id === user.type_id )
    const changeValueHandler = (itemValue, eValue) => {
      if (isAllowEdit) {
        setUsersList(users.map((us) => {
          if (user.id === us.id && itemValue === user.name) {
            user.name = eValue
          }
          return us
        }))
      } else {
        return
      }

    }
    
  return (
    <div className='table--row'>
        <UsersListCell item={user.id} changeValueHandler={changeValueHandler}/>
        <UsersListCell item={user.name} changeValueHandler={changeValueHandler}/>
        <UsersListCell item={userTypeName.name} changeValueHandler={changeValueHandler}/>
        <UsersListCell item={user.last_visit_date.toString()} changeValueHandler={changeValueHandler}/>
    </div>
  )
}

export default UsersListRow