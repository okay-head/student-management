import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/nav/Navbar'
import NotFound from './components/NotFound'
import Students from './components/Students'
import CreateStudent from './components/CreateStudent'
import UpdateStudent from './components/UpdateStudent'

export default function App() {
  return (
    <div className='app'>
      <Navbar />
      <Toaster />
      {/* login signup home */}
      <Routes>
        <Route path='/' />
        <Route index element={<Students />} />
        <Route path='create' element={<CreateStudent />} />
        <Route path='update' element={<UpdateStudent />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}
