export default function StudentCard({
  id,
  firstname,
  lastname,
  dob,
  grade,
  gender,
}: User) {
  console.log({ id, firstname, lastname, dob, grade, gender })

  return (
    <div className='student-card' id={`${id}`}>
      <div className='card w-96 bg-base-200 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title'>{`${firstname} ${lastname}`}</h2>
          <p>Date of birth:{` ${dob}`} </p>
          <p>Grade: {` ${grade}`}</p>
          <p>Gender:{` ${gender}`} </p>
          <div className='card-actions justify-end'>
            <button className='btn btn-outline btn-neutral btn-sm'>
              Update user
            </button>
            <button className='btn btn-outline btn-error btn-sm'>
              Delete user
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
