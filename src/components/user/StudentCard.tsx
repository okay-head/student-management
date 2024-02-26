import { format } from 'fecha'
import { deleteFn, getFn } from '../../firebase/firebaseDb'

export default function StudentCard({
  id,
  firstname,
  lastname,
  dob,
  grade,
  gender,
}: UserPayload) {
  // console.log({ id, firstname, lastname, dob, grade, gender })
  // console.log(formatDate((new Date(dob)).getTime()))
  const formatDate = (date: Date) => format(date, 'Do MMMM, YYYY')

  const newDob = formatDate(new Date(dob))
  /* -- DELETE USER -- */
  const deleteHandler = async () => {
    alert('Are you sure you want to delete the user?')
    try {
      console.log('will delete:', id)
      const resource = await getFn('/data/' + id)
      console.log(resource)

      await deleteFn(`/data/${id}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='student-card' id={`${id}`}>
      <div className='card w-96 bg-base-200 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title'>{`${firstname} ${lastname}`}</h2>
          <p>Date of birth:{` ${newDob}`} </p>
          <p>Grade: {` ${grade}`}</p>
          <p>Gender:{` ${gender}`} </p>
          <div className='card-actions justify-end'>
            <button className='btn btn-outline btn-neutral btn-sm'>
              Update user
            </button>
            <button
              onClick={deleteHandler}
              className='btn btn-outline btn-error btn-sm'
            >
              Delete user
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
