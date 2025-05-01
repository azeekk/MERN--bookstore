import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import DeleteBook from './pages/DeleteBook'
import CreateBook from './pages/CreateBook'
import ShowBook from './pages/ShowBook'
import EditBook from './pages/EditBook'
import Login from './pages/Login'
import Register from './pages/Register'
import CreateStudent from './pages/CreateStudent'
   
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} ></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/books/create' element={<CreateBook />} ></Route>
      <Route path='/books/details/:id' element={<ShowBook />} ></Route>
      <Route path='/books/edit/:id' element={<EditBook />} ></Route>
      <Route path='/books/delete/:id' element={<DeleteBook />} ></Route>
      <Route path='/students/create' element={<CreateStudent />}></Route>
    </Routes>
  )
}

export default App
