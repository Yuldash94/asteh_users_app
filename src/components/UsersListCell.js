import React from 'react'

function UsersListCell({item, changeValueHandler, type }) {
  const changeValue = (e) => {
    changeValueHandler(item, e.target.value);
  }

  return (
    <div className='table--cell'>
        <input
          type={type}
          value={item}
          onChange={changeValue}
        />
    </div>
  )
}

export default UsersListCell