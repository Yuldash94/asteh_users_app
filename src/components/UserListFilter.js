import React, { useState } from 'react'

function UserListFilter({userTypes, users, setUsersList, setLoading}) {

    const [name, setName] = useState('')

    const inputNameChange = (e) => {
        setName(e.target.value)
    }
    const [typeId, setTypeId] = useState(0)

    const selectChange = (e) => {
        setTypeId(e.target.value)
    }

    const [dateFrom, setDateFrom] = useState('')

    const dateFromChange = (e) => {
        setDateFrom(e.target.value)
    }
    const [dateBy, setDateBy] = useState('')

    const dateByChange = (e) => {
        setDateBy(e.target.value)
    }

    const onFilterClick = () => {
        let filterUsersList = []
        setLoading(true)
        setTimeout(() => {

            if (!name && (typeId === '0' || !typeId) && !dateFrom && !dateBy) { // ничего не выбран
                filterUsersList = users
            } else if (name && typeId !== 0 && dateFrom && dateBy) { // все поля
                filterUsersList = users.filter(user => 
                    user.name.toLowerCase().indexOf(name.toLowerCase()) > -1 &&
                    Number(user.type_id) === Number(typeId) &&
                    user.last_visit_date > dateFrom &&
                    user.last_visit_date < dateBy
                )
            } else if (name && (typeId === '0' || !typeId) && !dateFrom && !dateBy) { //только имя пользователя
                filterUsersList = users.filter(user => 
                    user.name.toLowerCase().indexOf(name.toLowerCase()) > -1
                )
            } else if (name && typeId !== 0 && !dateFrom && !dateBy) {  //имя пользователя и тип пользователя
                filterUsersList = users.filter(user => 
                    user.name.toLowerCase().indexOf(name.toLowerCase()) > -1 &&
                    Number(user.type_id) === Number(typeId)
                )
            } else if (!name && typeId !== 0 && !dateFrom && !dateBy) { // только тип пользователя
                filterUsersList = users.filter(user => 
                    Number(user.type_id) === Number(typeId)
                )
            } else if (!name && (typeId === '0' || !typeId) && dateFrom && dateBy) { //только дата с - по
                filterUsersList = users.filter(user => 
                    user.last_visit_date > dateFrom &&
                    user.last_visit_date < dateBy
                )
            } else if (name && (typeId === '0' || !typeId) && dateFrom && dateBy) { // имя и дата с - по
                filterUsersList = users.filter(user => 
                    user.name.toLowerCase().indexOf(name.toLowerCase()) > -1 &&
                    user.last_visit_date > dateFrom &&
                    user.last_visit_date < dateBy
                )
            } else if (!name && (typeId === '0' || !typeId) && dateFrom && !dateBy) { //только дата с 
                filterUsersList = users.filter(user => 
                    user.last_visit_date > dateFrom 
                )
            } else if (!name && (typeId === '0' || !typeId) && !dateFrom && dateBy) { //только дата по
                filterUsersList = users.filter(user => 
                    user.last_visit_date < dateBy
                )
            }else if (name && (typeId === '0' || !typeId) && dateFrom && !dateBy) { //только имя и дата с 
                filterUsersList = users.filter(user => 
                    user.name.toLowerCase().indexOf(name.toLowerCase()) > -1 &&
                    user.last_visit_date > dateFrom 
                )
            } else if (name && (typeId === '0' || !typeId) && !dateFrom && dateBy) { //только имя и дата по
                filterUsersList = users.filter(user => 
                    user.name.toLowerCase().indexOf(name.toLowerCase()) > -1 &&
                    user.last_visit_date < dateBy
                )
            } else if (!name && typeId !== 0 && dateFrom && dateBy) { // тип и дата с по
                filterUsersList = users.filter(user => 
                    Number(user.type_id) === Number(typeId) &&
                    user.last_visit_date > dateFrom &&
                    user.last_visit_date < dateBy
                )
            } else if (!name && typeId !== 0 && dateFrom && !dateBy) { // тип и дата с 
                filterUsersList = users.filter(user => 
                    Number(user.type_id) === Number(typeId) &&
                    user.last_visit_date > dateFrom 
                )
            } else if (!name && typeId !== 0 && !dateFrom && dateBy) { // тип и дата по
                filterUsersList = users.filter(user => 
                    Number(user.type_id) === Number(typeId) &&
                    user.last_visit_date < dateBy
                )
            } else if (name && typeId !== 0 && dateFrom && !dateBy) { // имя и тип и дата с 
                filterUsersList = users.filter(user => 
                    user.name.toLowerCase().indexOf(name.toLowerCase()) > -1 &&
                    Number(user.type_id) === Number(typeId) &&
                    user.last_visit_date > dateFrom 
                )
            } else if (name && typeId !== 0 && !dateFrom && dateBy) { // имя и тип и дата по 
                filterUsersList = users.filter(user => 
                    user.name.toLowerCase().indexOf(name.toLowerCase()) > -1 &&
                    Number(user.type_id) === Number(typeId) &&
                    user.last_visit_date > dateBy 
                )
            }
            setUsersList(filterUsersList)
            setLoading(false)
        }, 5000)
    }

  return (
    <div className='table--filter'>
        <label>
            Имя пользователя
        <input
            type='text'
            value={name}
            onChange={inputNameChange}
        />
        </label>
        <label>
            Тип пользоватея
            <select
                value={typeId}
                onChange={selectChange}
            >
                <option value={0}>--</option>
            {userTypes.map(userType => (
                <option 
                    key={userType.id} 
                    value={userType.id}
                >
                    {userType.name}
                </option>
            ))}
        </select>
        </label>
        <label>
            Дата последнего визита
                <label>
                    c
                    <input
                        type='datetime-local'
                        value={dateFrom}
                        onChange={dateFromChange}
                    />
                    по
                    <input
                        type='datetime-local'
                        value={dateBy}
                        onChange={dateByChange}
                    />
                </label>
        </label>
        <input type='button' value='Применить' onClick={onFilterClick}/>
    </div>
  )
}

export default UserListFilter