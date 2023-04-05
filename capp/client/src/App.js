import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import { userInfo } from './services/userService';

import './index.css';

import EditFood from './pages/foods/Edit';
import FoodList from './pages/foods/Index';
import NewFood from './pages/foods/New';
import ShowFood from './pages/foods/Show';
import HomePage from './pages/foods/Home';
import About from './pages/foods/About';

import Nav from './pages/foods/Nav';

import Register from './pages/users/Register';
import Login from './pages/users/Login';



function App() {

  const [user, setUser] = useState({})

  useEffect(() => {
      
      let token = localStorage.getItem("token")

      if (token) {
          getLoggedInUser()
      } else {
      }

      async function getLoggedInUser() {
          const user = await userInfo()
          setUser(user)
      }

  }, [])

  let loggedIn = user.username


  return (
    <div className="App">
      <Nav user={loggedIn} setUser={setUser}/>
      <Routes>
      {/* <Route path='/' element={<HomePage/>} /> */}
        {/* <Route path='/about' element={<About/>} /> */}
   
        <Route path='/' element={<HomePage user ={loggedIn}/>} />
        <Route path='/about' element={<About user = {setUser} />} />
        <Route path='/login' element={<Login setUser ={setUser}/>} />
        <Route path='/register' element={<Register setUser ={setUser}/>} />
        <Route path='/foods' element={user.username?<FoodList user = {loggedIn} />:<Login setUser ={setUser}/>} />
        <Route path='/foods/new' element={<NewFood user ={loggedIn} />} />
        <Route path='/foods/:id' element={<ShowFood />} />
        <Route path='/foods/:id/edit' element={<EditFood />} />
      </Routes>
      
    </div>
  );
}

export default App;
