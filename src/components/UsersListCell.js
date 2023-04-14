import React from 'react'

function UsersListCell({item, changeValueHandler }) {
  const changeValue = (e) => {
    changeValueHandler(item, e.target.value);
  }

  return (
    <div className='table--cell'>
        <input
          type='text'
          value={item}
          onChange={changeValue}
        />
    </div>
  )
}

export default UsersListCell