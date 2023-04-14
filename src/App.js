import { useEffect, useState } from 'react';
import './App.css';
// import Navigation from './components/Navigation';
// import {Routes, Route} from 'react-router-dom'
import users from './data/Users.json'
import userTypes from './data/UserTypes.json'
import AuthPage from './pages/AuthPage';
import UsersListPage from './pages/UsersListPage';
import { BiExit } from 'react-icons/bi'

function App() {

  const [isAuth, setIsAuth] = useState(false)
  const [usersList, setUsersList] = useState(users)
  const [isAllowEdit, setIsAllowEdit] = useState(false)
    const exitClickHandler = () => {
      setIsAllowEdit(false)
      setIsAuth(false)
    }

    useEffect(() =>{
      
    }, [usersList])
  return (
    <div className="App">
      <header>
        <h1>Список пользователей</h1>
        <BiExit onClick={exitClickHandler}/>
      </header>
      {isAllowEdit && 
        <p>Редактирование разрешено</p> 
      }
      {!isAuth ? 
        <AuthPage setIsAuth={setIsAuth} users={users} userTypes={userTypes} setIsAllowEdit={setIsAllowEdit}/> 
        :
        <UsersListPage usersOriginal={users} users={usersList} userTypes={userTypes} setUsersList={setUsersList} isAllowEdit={isAllowEdit}/>
      }

    </div>
  );
}

export default App;
