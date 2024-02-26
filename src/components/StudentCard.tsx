import { format } from 'fecha'
import { deleteFn, getFn } from '../firebase/firebaseDb'
import { useNavigate } from 'react-router-dom'

export default function StudentCard({
  id,
  firstname,
  lastname,
  dob,
  grade,
  gender,
}: UserPayload) {
  const navigate = useNavigate()

  const formatDate = (date: Date) => format(date, 'Do MMMM, YYYY')
  const newDob = formatDate(new Date(dob))

  // logic for age
  const factor = 365 * 24 * 60 * 60 * 1000
  const diff = new Date().getTime() - new Date(dob).getTime()
  const obj = { firstname, age: (diff / factor).toFixed(0) }
  console.log(obj)

  const age = (diff / factor).toFixed(0)

  /* -- DELETE USER -- */
  const deleteHandler = async () => {
    alert('Are you sure you want to delete the user?')
    try {
      console.log('will delete:', id)
      const resource = await getFn('/data/' + id)
      console.log(resource)

      await deleteFn(`/data/${id}`)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }
  const handleUpdate = async () => {
    const userdata = { id, firstname, lastname, dob, grade, gender }
    localStorage.setItem('user', JSON.stringify(userdata))
    navigate('/update')
  }

  return (
    <div className='student-card' id={`${id}`}>
      <div className='card w-96 bg-base-200 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title text-xl'>{`${firstname} ${lastname}`}</h2>
          <p>Date of birth:{` ${newDob}`} </p>
          <p>Grade: {` ${grade}`}</p>
          <p>Gender:{` ${gender}`} </p>
          <p>Age:{` ${age} year(s)`} </p>
          <div className='card-actions justify-end'>
            <button
              onClick={handleUpdate}
              className='btn btn-neutral btn-sm font-normal hover:btn-outline'
            >
              Update user
            </button>
            <button
              onClick={deleteHandler}
              className='btn btn-outline btn-error btn-sm font-normal'
            >
              Delete user
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
