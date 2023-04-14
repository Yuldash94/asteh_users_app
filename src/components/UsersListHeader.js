import React from 'react'
import UsersListCell from './UsersListCell'

function UsersListHeader() {
    const headerName = {
        id: '№',
        user_name: 'Имя пользователя',
        user_type: 'Тип пользователя',
        last_visit_date: 'Дата последнего визита'

    }
  return (
    <div className='table--row table--row-header'>
        <UsersListCell item={headerName.id}/>
        <UsersListCell item={headerName.user_name}/>
        <UsersListCell item={headerName.user_type}/>
        <UsersListCell item={headerName.last_visit_date}/>
    </div>
  )
}

export default UsersListHeader