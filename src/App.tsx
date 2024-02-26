import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/nav/Navbar'
import NotFound from './components/NotFound'
import Students from './components/Students'
import CreateStudent from './components/CreateStudent'
// import SignUp from './components/CreateStudent'
// import Home from './components/Home'
// import SignIn from './components/auth/SignIn'
// import Tasks from './components/user/Students'
// import Create from './components/user/Create'
// import EditTask from './components/user/EditTask'

//   import { useEffect } from 'react'
// import 'preline/preline'
// import { IStaticMethods } from 'preline/preline'
// import SignUp from './components/auth/SignUp'
// import SignIn from './components/auth/SignIn'
// import Home from './components/feed/Home'
// import NotFound from './NotFound'
// import Users from './components/users/Users'
// import Profile from './components/profile/Profile'
// import CheckAuth from './components/auth/CheckAuth'
// import CreateWave from './components/user/CreateWave'
// import Logout from './components/auth/Logout'

export default function App() {
  return (
    <div className='app'>
      <Navbar />
      <Toaster />
      {/* login signup home */}
      <Routes>
        <Route path='/' />
        <Route index element={<Students />} />
        {/* <Route path='/auth'> */}
        {/* <Route index element={<NotFound />} /> */}
        <Route path='create' element={<CreateStudent />} />
        {/* <Route path='signin' element={<SignIn />} /> */}
        {/* </Route> */}
        <Route path='*' element={<NotFound />} />

        {/* <Route path='/users' element={<Users />} /> */}

        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </div>
  )
}
