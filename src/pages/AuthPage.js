import React, {useState} from 'react'

function AuthPage( {setIsAuth, users, setIsAllowEdit, userTypes} ) {
  const [authLogin, setAuthLogin] = useState('')
  const [authPassword, setAuthPassword] = useState('')
  
  const changeInputAuthLogin = event => {
    setAuthLogin(event.target.value)
  }
  
  const changeInputAuthPassword = event => {
    setAuthPassword(event.target.value)
  }
  const allowEdit = (id) => {
    const aUser = userTypes.filter(type => type.id === id)
    if (aUser[0].allow_edit === true) {
      return true
    } else {
      return false
    }
  }
  const onSubmitAuth = () => {
    if ((!authLogin && !authPassword ) || !authPassword || !authLogin) {
      alert('Введите логин и пароль')
      return
    }
    const authUser = users.filter((user) => user.login === authLogin)
    if (authUser && authUser.find(el => el.password === authPassword)) {
      setIsAllowEdit( allowEdit(authUser[0].type_id))
      setIsAuth(true)
    } else if (authUser.length === 0 && !authUser.find(el => el.password === authPassword)) {
      alert ('Неправильный логин и пароль...') 
    } else if (!authUser) {
      alert('Неправильный логин...')
    } else if (!authUser.find(el => el.password === authPassword)) {
      alert('Неправильный пароль...')
    }
  }


  return (
    <div className='auth--form'>
      <form >
        <p>Введите логин:</p>
         <input 
            type="text"
            id="login"
            name="login"
            value={authLogin}
            onChange={changeInputAuthLogin}
          />
        <p>Введите пароль:</p>
         <input 
            type="password"
            id="password"
            name="password"
            value={authPassword}
            onChange={changeInputAuthPassword}
            />
        <input type="button" onClick={onSubmitAuth} value='Войти'/> 
      </form>
    </div>
  )
}

export default AuthPage