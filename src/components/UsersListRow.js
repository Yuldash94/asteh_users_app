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
    const changeValueHandlerLastDate = (itemValue, eValue) => {
      if (isAllowEdit) {
        setUsersList(users.map((us) => {
          if (user.id === us.id && itemValue === user.last_visit_date) {
            user.last_visit_date = eValue
          }
          return us
        }))
      } else {
        return
      }
    }

  return (
    <div className='table--row'>
        <UsersListCell type={'text'} item={user.id} changeValueHandler={changeValueHandler}/>
        <UsersListCell type={'text'} item={user.name} changeValueHandler={changeValueHandler}/>
        <UsersListCell type={'text'} item={userTypeName.name} changeValueHandler={changeValueHandler}/>
        <UsersListCell type={!isAllowEdit ? "text" : "datetime-local"} item={user.last_visit_date.toString()} changeValueHandler={changeValueHandlerLastDate}/>
    </div>
  )
}

export default UsersListRow